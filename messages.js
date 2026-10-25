// Messages between students and tutors, shared by the student dashboard (index.html) and the tutor page
// (tutor.html). They're saved in Supabase (tables messages, groups, group_members, group_messages and reads;
// see supabase/schema.sql) and read from what db.js has loaded. The pages refer to people by username.
const TelaMessages = (() => {
  const S = TelaDB.S;
  const sid = username => TelaDB.idOf("student", username);
  const tid = username => TelaDB.idOf("tutor", username);
  const newId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  const byTime = (a, b) => a.at - b.at;

  // A student's tutors (usernames).
  function tutorsOf(student) {
    const id = sid(student);
    return S.links.filter(l => l.student_id === id).map(l => TelaDB.usernameOf(l.tutor_id)).filter(Boolean);
  }

  // ---------- One-to-one conversations ----------
  // Messages as the pages use them: { id, from: "student" | "tutor", text, at }.
  const toMsg = m => ({ id: m.id, from: m.from_role, text: m.text, at: m.at });
  function thread(student, tutor) {
    const s = sid(student), t = tid(tutor);
    return S.messages.filter(m => m.student_id === s && m.tutor_id === t).sort(byTime).map(toMsg);
  }
  function send(student, tutor, from, text) {
    const row = { id: newId(), student_id: sid(student), tutor_id: tid(tutor), from_role: from, text: String(text).trim(), at: Date.now() };
    if (!row.text || !row.student_id || !row.tutor_id) return null;
    S.messages.push(row);
    TelaDB.track(TelaDB.client.from("messages").insert(row), () => { S.messages = S.messages.filter(m => m !== row && m.id !== row.id); });
    return toMsg(row);
  }
  // side is who is reading: "student" or "tutor". Unread = messages from the other side since they last read.
  // A student's read marker for a conversation is "t:<tutor id>"; a tutor's is "s:<student id>".
  const readKey = (student, tutor, side) => side === "student" ? "t:" + tid(tutor) : "s:" + sid(student);
  function unread(student, tutor, side) {
    const since = TelaDB.lastRead(readKey(student, tutor, side)), other = side === "student" ? "tutor" : "student";
    return thread(student, tutor).filter(m => m.from === other && m.at > since).length;
  }
  const markRead = (student, tutor, side) => TelaDB.markRead(readKey(student, tutor, side));
  const last = (student, tutor) => thread(student, tutor).pop() || null;
  // The tutors a student has a conversation with (used by the admin view of all messages).
  function partners(student) {
    const s = sid(student);
    return [...new Set(S.messages.filter(m => m.student_id === s).map(m => m.tutor_id))].map(TelaDB.usernameOf).filter(Boolean);
  }

  // "14:05" today, "Yesterday 14:05", otherwise "24 Oct 14:05".
  function when(at) {
    const d = new Date(at), now = new Date(), time = d.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
    const day = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    if (at >= day) return time;
    if (at >= day - 864e5) return "Yesterday " + time;
    return d.toLocaleDateString(undefined, { day: "numeric", month: "short" }) + " " + time;
  }

  // ---------- Group chats ----------
  // A tutor makes a group with some of their students; everyone in it sees every message.
  // As the pages use them: { id, name, tutor: username, members: [student usernames], createdAt }
  // and messages { id, from: username, role: "tutor" | "student", text, at }.
  function toGroup(g) {
    return { id: g.id, name: g.name, tutor: TelaDB.usernameOf(g.tutor_id), createdAt: g.created_at,
      members: S.members.filter(m => m.group_id === g.id).map(m => TelaDB.usernameOf(m.student_id)).filter(Boolean) };
  }
  const allGroups = () => Object.fromEntries(S.groups.map(g => [g.id, toGroup(g)]));
  const group = id => { const g = S.groups.find(x => x.id === id); return g ? toGroup(g) : null; };
  const toGroupMsg = m => ({ id: m.id, from: TelaDB.usernameOf(m.sender_id) || "", role: m.role, text: m.text, at: m.at });
  const groupThread = id => S.groupMessages.filter(m => m.group_id === id).sort(byTime).map(toGroupMsg);
  const groupLast = id => groupThread(id).pop() || null;
  // A tutor's own groups, or the groups a student is in (while that group's tutor still teaches them).
  // Most recent activity first.
  function groupsFor(user, role) {
    const activity = g => (groupLast(g.id) || {}).at || g.createdAt;
    return Object.values(allGroups())
      .filter(g => role === "tutor" ? g.tutor === user : g.members.includes(user) && tutorsOf(user).includes(g.tutor))
      .sort((a, b) => activity(b) - activity(a));
  }
  // Renames a group and sets who's in it.
  function saveGroup(g) {
    const row = S.groups.find(x => x.id === g.id);
    if (!row) return null;
    const oldName = row.name, oldMembers = S.members.filter(m => m.group_id === g.id);
    const ids = g.members.map(sid).filter(Boolean);
    const added = ids.filter(id => !oldMembers.some(m => m.student_id === id)).map(id => ({ group_id: g.id, student_id: id }));
    const removed = oldMembers.filter(m => !ids.includes(m.student_id)).map(m => m.student_id);
    row.name = String(g.name).trim();
    S.members = S.members.filter(m => m.group_id !== g.id).concat(ids.map(id => ({ group_id: g.id, student_id: id })));
    const undo = () => { row.name = oldName; S.members = S.members.filter(m => m.group_id !== g.id).concat(oldMembers); };
    const db = TelaDB.client;
    TelaDB.track((async () => {
      let res = await db.from("groups").update({ name: row.name }).eq("id", g.id);
      if (!res.error && removed.length) res = await db.from("group_members").delete().eq("group_id", g.id).in("student_id", removed);
      if (!res.error && added.length) res = await db.from("group_members").insert(added);
      return res;
    })(), undo);
    return toGroup(row);
  }
  function createGroup(tutor, name, members) {
    const row = { id: "g" + newId(), tutor_id: tid(tutor), name: String(name).trim(), created_at: Date.now() };
    const memberRows = members.map(sid).filter(Boolean).map(id => ({ group_id: row.id, student_id: id }));
    S.groups.push(row);
    S.members.push(...memberRows);
    const db = TelaDB.client;
    TelaDB.track((async () => {
      const res = await db.from("groups").insert(row);
      return res.error || !memberRows.length ? res : db.from("group_members").insert(memberRows);
    })(), () => { S.groups = S.groups.filter(g => g !== row); S.members = S.members.filter(m => m.group_id !== row.id); });
    return toGroup(row);
  }
  // Deleting a group deletes its members and messages with it.
  function deleteGroup(id) {
    const row = S.groups.find(g => g.id === id);
    if (!row) return false;
    const members = S.members.filter(m => m.group_id === id), msgs = S.groupMessages.filter(m => m.group_id === id);
    S.groups = S.groups.filter(g => g !== row);
    S.members = S.members.filter(m => m.group_id !== id);
    S.groupMessages = S.groupMessages.filter(m => m.group_id !== id);
    TelaDB.track(TelaDB.client.from("groups").delete().eq("id", id), () => { S.groups.push(row); S.members.push(...members); S.groupMessages.push(...msgs); });
    return true;
  }
  // A deleted student's group places go with their account on the server; this updates the page's copy.
  function leaveAllGroups(student) {
    const id = sid(student);
    S.members = S.members.filter(m => m.student_id !== id);
  }
  function groupSend(id, from, role, text) {
    const sender = role === "tutor" ? tid(from) : sid(from);
    const row = { id: newId(), group_id: id, sender_id: sender, role, text: String(text).trim(), at: Date.now() };
    if (!row.text || !sender || !group(id)) return null;
    S.groupMessages.push(row);
    TelaDB.track(TelaDB.client.from("group_messages").insert(row), () => { S.groupMessages = S.groupMessages.filter(m => m !== row && m.id !== row.id); });
    return toGroupMsg(row);
  }
  // Unread = messages from anyone else since this person last read the group (read marker "g:<group id>").
  function groupUnread(id, user, role) {
    const since = TelaDB.lastRead("g:" + id);
    return groupThread(id).filter(m => !(m.from === user && m.role === role) && m.at > since).length;
  }
  const groupMarkRead = id => TelaDB.markRead("g:" + id);

  // Names as shown in messages: each word starts with a capital ("sam lee" -> "Sam Lee", "o'neil-smith" -> "O'Neil-Smith").
  // Only first letters change, so names like "McKay" keep their own capitals.
  const properName = name => String(name ?? "").trim().replace(/(^|[\s'’-])(\p{Ll})/gu, (m, before, ch) => before + ch.toUpperCase());
  // Display name of whoever sent a group message.
  function senderName(m) {
    const p = TelaDB.profile(m.role, m.from);
    return properName((p && p.display_name) || m.from || "Someone");
  }

  return { tutorsOf, thread, send, unread, markRead, last, partners, when,
    group, allGroups, groupsFor, groupThread, groupLast, saveGroup, createGroup, deleteGroup, leaveAllGroups,
    groupSend, groupUnread, groupMarkRead, senderName, properName };
})();

// Messages between a student and each of their tutors, shared by the student dashboard (index.html)
// and the tutor page (tutor.html). Everything is saved in this browser:
//   tela.topics.<student>.messages  { tutorUsername: [{ id, from: "student" | "tutor", text, at }] }
//   tela.topics.<student>.msgRead   { tutorUsername: time the student last read that conversation }
//   tela.tutorMsgRead.<tutor>       { studentUsername: time the tutor last read that conversation }
const TelaMessages = (() => {
  const read = (key, fallback) => { try { const v = JSON.parse(localStorage.getItem(key)); return v ?? fallback; } catch (e) { return fallback; } };
  const write = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch (e) { return false; } };
  const threadsKey = student => "tela.topics." + student + ".messages";
  const readKey = (student, tutor, side) => side === "student" ? "tela.topics." + student + ".msgRead" : "tela.tutorMsgRead." + tutor;

  // A student's tutors: the account's tutors list (older accounts made by a tutor only have addedBy).
  function tutorsOf(student) {
    const acc = read("tela.accounts", {})[student] || {};
    return Array.isArray(acc.tutors) ? acc.tutors : acc.addedBy ? [acc.addedBy] : [];
  }

  // Notes from before messaging become the first message of each conversation.
  function migrate(student) {
    const threads = read(threadsKey(student), {});
    let changed = false;
    const notesKey = "tela.topics." + student + ".notes", notes = read(notesKey, null);
    if (notes) {
      Object.entries(notes).forEach(([tutor, n]) => {
        if (n && String(n.text || "").trim()) { (threads[tutor] = threads[tutor] || []).unshift({ id: "n" + (n.updated || 0), from: "student", text: n.text.trim(), at: n.updated || Date.now() }); changed = true; }
      });
      localStorage.removeItem(notesKey);
    }
    const oldKey = "tela.topics." + student + ".tutor", old = read(oldKey, null), tutors = tutorsOf(student);
    if (old && String(old.notes || "").trim() && tutors.length === 1) {
      (threads[tutors[0]] = threads[tutors[0]] || []).unshift({ id: "o" + (old.notesUpdated || 0), from: "student", text: old.notes.trim(), at: old.notesUpdated || Date.now() });
      localStorage.removeItem(oldKey);
      changed = true;
    }
    if (changed) write(threadsKey(student), threads);
    return threads;
  }

  function thread(student, tutor) {
    return (migrate(student)[tutor] || []).slice().sort((a, b) => a.at - b.at);
  }
  function send(student, tutor, from, text) {
    const threads = migrate(student);
    const msg = { id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), from, text: String(text).trim(), at: Date.now() };
    if (!msg.text) return null;
    (threads[tutor] = threads[tutor] || []).push(msg);
    return write(threadsKey(student), threads) ? msg : null;
  }
  // side is who is reading: "student" or "tutor". Unread = messages from the other side since they last read.
  function lastRead(student, tutor, side) {
    return read(readKey(student, tutor, side), {})[side === "student" ? tutor : student] || 0;
  }
  function unread(student, tutor, side) {
    const since = lastRead(student, tutor, side), other = side === "student" ? "tutor" : "student";
    return thread(student, tutor).filter(m => m.from === other && m.at > since).length;
  }
  function markRead(student, tutor, side) {
    const key = readKey(student, tutor, side), map = read(key, {});
    map[side === "student" ? tutor : student] = Date.now();
    write(key, map);
  }
  const last = (student, tutor) => thread(student, tutor).pop() || null;
  // The tutors a student has a conversation with (used by the admin view of all messages).
  const partners = student => Object.entries(migrate(student)).filter(([, list]) => Array.isArray(list) && list.length).map(([tutor]) => tutor);

  // "14:05" today, "Yesterday 14:05", otherwise "24 Oct 14:05".
  function when(at) {
    const d = new Date(at), now = new Date(), time = d.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
    const day = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    if (at >= day) return time;
    if (at >= day - 864e5) return "Yesterday " + time;
    return d.toLocaleDateString(undefined, { day: "numeric", month: "short" }) + " " + time;
  }
  const isMessagesKey = key => /^tela\.(topics\.[^.]+\.(messages|msgRead)|tutorMsgRead\.|groups($|\.)|groupRead\.)/.test(key || "");

  // ---------- Group chats ----------
  // A tutor makes a group with some of their students; everyone in it sees every message.
  //   tela.groups                   { groupId: { id, name, tutor, members: [student usernames], createdAt } }
  //   tela.groups.<id>.messages     [{ id, from: username, role: "tutor" | "student", text, at }]
  //   tela.groupRead.<role>.<user>  { groupId: time that person last read the group }
  // (role is part of the key because a student and a tutor can have the same username.)
  const GROUPS = "tela.groups";
  const groupMsgKey = id => GROUPS + "." + id + ".messages";
  const groupReadKey = (user, role) => "tela.groupRead." + role + "." + user;
  const newId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  const allGroups = () => read(GROUPS, {});

  const group = id => allGroups()[id] || null;
  const groupThread = id => read(groupMsgKey(id), []).slice().sort((a, b) => a.at - b.at);
  const groupLast = id => groupThread(id).pop() || null;
  // A tutor's own groups, or the groups a student is in (while that group's tutor still teaches them).
  // Most recent activity first.
  function groupsFor(user, role) {
    const activity = g => (groupLast(g.id) || {}).at || g.createdAt;
    return Object.values(allGroups())
      .filter(g => role === "tutor" ? g.tutor === user : g.members.includes(user) && tutorsOf(user).includes(g.tutor))
      .sort((a, b) => activity(b) - activity(a));
  }
  function saveGroup(g) {
    const all = allGroups();
    all[g.id] = g;
    return write(GROUPS, all) ? g : null;
  }
  const createGroup = (tutor, name, members) => saveGroup({ id: "g" + newId(), name: String(name).trim(), tutor, members, createdAt: Date.now() });
  function deleteGroup(id) {
    const all = allGroups();
    delete all[id];
    try { localStorage.removeItem(groupMsgKey(id)); } catch (e) {}
    return write(GROUPS, all);
  }
  // Takes a deleted student out of every group (their old messages stay).
  function leaveAllGroups(student) {
    const all = allGroups();
    Object.values(all).forEach(g => { g.members = g.members.filter(m => m !== student); });
    write(GROUPS, all);
  }
  function groupSend(id, from, role, text) {
    const msg = { id: newId(), from, role, text: String(text).trim(), at: Date.now() };
    if (!msg.text || !group(id)) return null;
    const list = read(groupMsgKey(id), []);
    list.push(msg);
    return write(groupMsgKey(id), list) ? msg : null;
  }
  // Unread = messages from anyone else since this person last read the group.
  function groupUnread(id, user, role) {
    const since = read(groupReadKey(user, role), {})[id] || 0;
    return groupThread(id).filter(m => !(m.from === user && m.role === role) && m.at > since).length;
  }
  function groupMarkRead(id, user, role) {
    const key = groupReadKey(user, role), map = read(key, {});
    map[id] = Date.now();
    write(key, map);
  }
  // Names as shown in messages: each word starts with a capital ("sam lee" -> "Sam Lee", "o'neil-smith" -> "O'Neil-Smith").
  // Only first letters change, so names like "McKay" keep their own capitals.
  const properName = name => String(name ?? "").trim().replace(/(^|[\s'’-])(\p{Ll})/gu, (m, before, ch) => before + ch.toUpperCase());
  // Display name of whoever sent a group message.
  function senderName(m) {
    const acc = read(m.role === "tutor" ? "tela.tutors" : "tela.accounts", {})[m.from];
    return properName((acc && acc.displayName) || m.from);
  }

  return { tutorsOf, thread, send, unread, markRead, last, partners, when, isMessagesKey,
    group, allGroups, groupsFor, groupThread, groupLast, saveGroup, createGroup, deleteGroup, leaveAllGroups,
    groupSend, groupUnread, groupMarkRead, senderName, properName };
})();

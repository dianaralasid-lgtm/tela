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

  // "14:05" today, "Yesterday 14:05", otherwise "24 Oct 14:05".
  function when(at) {
    const d = new Date(at), now = new Date(), time = d.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
    const day = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    if (at >= day) return time;
    if (at >= day - 864e5) return "Yesterday " + time;
    return d.toLocaleDateString(undefined, { day: "numeric", month: "short" }) + " " + time;
  }
  const isMessagesKey = key => /^tela\.(topics\.[^.]+\.(messages|msgRead)|tutorMsgRead\.)/.test(key || "");

  return { tutorsOf, thread, send, unread, markRead, last, when, isMessagesKey };
})();

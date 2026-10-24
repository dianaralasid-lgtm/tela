// Shared by login.html and tutor.html: password hashing for accounts stored in this browser.
// (SHA-256 written out in full so it works offline and when the page is opened from file://.)
function sha256(str) {
  const rotr = (x, n) => (x >>> n) | (x << (32 - n));
  const K = [], H = [];
  const frac = x => ((x - Math.floor(x)) * 4294967296) | 0;
  for (let n = 2, c = 0; c < 64; n++) {
    let prime = true;
    for (let i = 2; i * i <= n; i++) if (n % i === 0) { prime = false; break; }
    if (!prime) continue;
    if (c < 8) H[c] = frac(Math.pow(n, 1 / 2));
    K[c++] = frac(Math.pow(n, 1 / 3));
  }

  const bytes = new TextEncoder().encode(str);
  const total = ((bytes.length + 9 + 63) >> 6) << 6;
  const buf = new Uint8Array(total);
  buf.set(bytes);
  buf[bytes.length] = 0x80;
  const view = new DataView(buf.buffer);
  const bitLen = bytes.length * 8;
  view.setUint32(total - 8, Math.floor(bitLen / 4294967296));
  view.setUint32(total - 4, bitLen >>> 0);

  const w = new Array(64);
  for (let off = 0; off < total; off += 64) {
    for (let i = 0; i < 16; i++) w[i] = view.getInt32(off + i * 4);
    for (let i = 16; i < 64; i++) {
      const s0 = rotr(w[i - 15], 7) ^ rotr(w[i - 15], 18) ^ (w[i - 15] >>> 3);
      const s1 = rotr(w[i - 2], 17) ^ rotr(w[i - 2], 19) ^ (w[i - 2] >>> 10);
      w[i] = (w[i - 16] + s0 + w[i - 7] + s1) | 0;
    }
    let [a, b, c, d, e, f, g, h] = H;
    for (let i = 0; i < 64; i++) {
      const t1 = (h + (rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25)) + ((e & f) ^ (~e & g)) + K[i] + w[i]) | 0;
      const t2 = ((rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22)) + ((a & b) ^ (a & c) ^ (b & c))) | 0;
      h = g; g = f; f = e; e = (d + t1) | 0;
      d = c; c = b; b = a; a = (t1 + t2) | 0;
    }
    [a, b, c, d, e, f, g, h].forEach((v, j) => { H[j] = (H[j] + v) | 0; });
  }
  return H.map(v => (v >>> 0).toString(16).padStart(8, "0")).join("");
}

function randomSalt() {
  const arr = new Uint8Array(16);
  crypto.getRandomValues(arr);
  return Array.from(arr, b => b.toString(16).padStart(2, "0")).join("");
}

function hashPassword(password, salt) { return sha256(salt + ":" + password); }

const buf = new ArrayBuffer(16)
console.log(buf.byteLength);
const buf1 = buf.slice(2, 8)
console.log(buf1.byteLength);
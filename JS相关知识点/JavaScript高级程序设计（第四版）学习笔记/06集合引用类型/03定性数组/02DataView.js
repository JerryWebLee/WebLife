const buf = new ArrayBuffer(32)

const fullDataView = new DataView(buf)

console.log(fullDataView.byteOffset);
console.log(fullDataView.byteLength);
console.log(fullDataView.buffer === buf);

const firstDataView = new DataView(buf, 0, 8)
console.log(firstDataView.byteOffset);
console.log(firstDataView.byteLength);
console.log(firstDataView.buffer === buf);

const secondDataView = new DataView(buf, 8)
console.log(secondDataView.byteOffset);
console.log(secondDataView.byteLength);
console.log(secondDataView.buffer === buf);
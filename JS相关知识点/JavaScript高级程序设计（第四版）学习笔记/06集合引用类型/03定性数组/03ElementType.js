const buf = new ArrayBuffer(2)

const view = new DataView(buf)
console.log(view.getInt8(0));
console.log(view.getInt8(1));
console.log(view.getInt16(0));

// view.setUint32(0, 255)
view.setInt16(0, 2)
view.setInt8(1, 0xff)
console.log(view.getInt16(0));
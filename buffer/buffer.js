const buffer1 = Buffer.alloc(8);

console.log(buffer1);

const buffer2 = Buffer.from([3, 3, 2, 3, 2, 3, 3]);
console.log(buffer2);

const buffer3 = Buffer.from("[3, 3, 2, 3, 2, 3, 3]");
console.log(buffer3.length);

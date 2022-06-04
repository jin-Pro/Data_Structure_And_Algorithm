import HashTable, { hashFnType } from "./HashTable";

const SIZE = 36;
const hashFn: hashFnType<number> = (key) => key % SIZE;
const table = new HashTable(hashFn, SIZE);

table.add(36, 1234);
table.add(0, 12345);

console.log(table.peek(36));
console.log(table.peek(0));

table.delete(36);
console.log(table.has(36));
console.log(table.getKeys());

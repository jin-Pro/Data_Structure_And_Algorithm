import { SegmentTree } from "./SegmentTree";

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const tree = new SegmentTree(arr);
console.log(tree.tree);

console.log(tree.query(0, 3, 5));

tree.update(0, 3, 10);
console.log(tree.tree);

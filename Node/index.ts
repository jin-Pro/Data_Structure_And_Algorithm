import { node } from "./Node";

const node1 = new node(1);
const node2 = new node(2);
const node3 = new node(3);

node1.add(node2);
node2.add(node3);
console.log(node1);
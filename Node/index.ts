import { node } from "./Node";

const node1 = new node(1);
const node2 = new node(2);
const node3 = new node(3);
const node4 = new node(4);
const node5 = new node(5);

node1.add(node2,'left')
node1.add(node3,'right')
node2.add(node4,'left')
node3.add(node5,'left')

node1.print();
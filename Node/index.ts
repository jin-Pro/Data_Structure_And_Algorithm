import { node } from "./Node";

const node1 = new node(1);
const node2 = new node(2);
const node3 = new node(3);
const node4 = new node(4);
const node5 = new node(5);

node1.add('left',2)
node1.add('right',3)
node2.add('left',4)
node3.add('left',5)

node1.print();
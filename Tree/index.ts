import { BinaryTree } from "./Tree";


const node1 = new BinaryTree(1);
const node2 = new BinaryTree(2);
const node3 = new BinaryTree(3);
const node4 = new BinaryTree(4);
const node5 = new BinaryTree(5);

node1.add(node2,'left')
node1.add(node3,'right')
node2.add(node4,'left')
node3.add(node5,'left')

node1.preOrderPrint();
console.log('---')
node1.inOrderPrint();
console.log('---')
node1.postOrderPrint();
console.log('---')
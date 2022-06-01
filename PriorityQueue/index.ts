import { FunctionType, Heap } from "../Heap/Heap";

type queueItemType = [start: number, arrive: number, value: number];
const fn: FunctionType<queueItemType> = (edge1, edge2) => edge1[2] < edge2[2];

const node: queueItemType = [1, 2, 3];
const node1: queueItemType = [1, 2, 1];
const node2: queueItemType = [1, 2, 2];
const node3: queueItemType = [1, 2, 4];
const node4: queueItemType = [1, 2, 5];
const node5: queueItemType = [1, 2, 66];
const node6: queueItemType = [1, 2, 7];
const node7: queueItemType = [1, 2, 8];
const node8: queueItemType = [1, 2, 9];
const node9: queueItemType = [1, 2, 10];
const node0: queueItemType = [1, 2, 11];

const priorityQueue = new Heap<queueItemType>(node, fn);

priorityQueue.add(node1);
priorityQueue.add(node2);
priorityQueue.add(node3);
priorityQueue.add(node4);
priorityQueue.add(node5);
priorityQueue.add(node6);
priorityQueue.add(node7);
priorityQueue.add(node8);
priorityQueue.add(node9);
priorityQueue.add(node0);

console.log(priorityQueue.delete());
console.log(priorityQueue.delete());
console.log(priorityQueue.delete());
console.log(priorityQueue.delete());
console.log(priorityQueue.delete());
console.log(priorityQueue.delete());

// type queueItemType = [start: number, arrive: number, value: number];
// type FunctionType<T> = (num1: T, num2: T) => boolean;
// const fn3: FunctionType<queueItemType> = (edge1, edge2) => edge1[2] < edge2[2];

// const fn: FunctionType = (num1, num2) => num1 < num2;
// const fn2: FunctionType = (edge1: queueItemType, edge2: queueItemType) =>
//   edge1[2] < edge2[2];

import { FunctionType } from "../Heap/Heap";
import { queueItemType } from "../PriorityQueue";
// import { Kruskal } from "./Kruskal";
import { Prim } from "./Prim";

// const NODE_LENGTH = 6;
// const VERTEX_LENGTH = 9;
export const fn: FunctionType<queueItemType> = (edge1, edge2) =>
  edge1[2] > edge2[2];
const arr: queueItemType[] = [
  [1, 2, 5],
  [1, 3, 4],
  [2, 3, 2],
  [2, 4, 7],
  [3, 4, 6],
  [3, 5, 11],
  [4, 5, 3],
  [4, 6, 8],
  [5, 6, 8],
];

// const kruskal = new Kruskal(NODE_LENGTH, VERTEX_LENGTH, arr);
const START = 1;
const SIZE = 6;
const prim = new Prim(arr, START, fn, SIZE);

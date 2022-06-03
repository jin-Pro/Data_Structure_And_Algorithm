import { FunctionType } from "../Heap/Heap";
import { queueItemType } from "../PriorityQueue";
import { Dijkstra } from "./Dijkstra";

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

const START = 1;
const END = 6;
const SIZE = 6;
const dijk = new Dijkstra(arr, START, END, SIZE);

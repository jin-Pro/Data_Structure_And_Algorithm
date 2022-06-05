import { queueItemType } from "../PriorityQueue";
import TopologySort from "./TopologySort";

const arr: queueItemType[] = [
  [1, 2, 5],
  [1, 3, 4],
  [2, 3, 2],
  [2, 4, 7],
  [3, 4, 6],
  //   [4, 3, 6],
  [3, 5, 11],
  [4, 5, 3],
  [4, 6, 8],
  [5, 6, 8],
];

const sortArr = new TopologySort(arr, 6);

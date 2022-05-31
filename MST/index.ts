import { Kruskal } from "./Kruskal";

const NODE_LENGTH = 6;
const VERTEX_LENGTH = 9;
const arr = [
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

//[
//     [ 2, 3, 2 ],
//     [ 4, 5, 3 ],
//     [ 1, 3, 4 ],
//     [ 1, 2, 5 ],
//     [ 3, 4, 6 ],
//     [ 2, 4, 7 ],
//     [ 4, 6, 8 ],
//     [ 5, 6, 8 ],
//     [ 3, 5, 11 ]
//   ]
const kruskal = new Kruskal(NODE_LENGTH, VERTEX_LENGTH, arr);

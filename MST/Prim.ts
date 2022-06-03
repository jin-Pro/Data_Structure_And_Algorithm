import { FunctionType, Heap } from "../Heap/Heap";
import { queueItemType } from "../PriorityQueue";

type nodeItem<T> = keyof T;

export class Prim<T extends queueItemType> {
  PriorityQueue: Heap<T>;
  node: Set<nodeItem<T>>;
  vertex: T[];
  select: T[];
  size: number;

  constructor(arr: T[], start: nodeItem<T>, fn: FunctionType<T>, size: number) {
    this.size = size;
    this.vertex = arr;
    const vertex = this.makeVertex(start);
    this.PriorityQueue = this.initHeap(vertex, fn);
    this.node = new Set([start]);
    this.select = [];
    this.calc();
  }

  initHeap(vertex: T[], fn: FunctionType<T>): Heap<T> {
    const heap = new Heap<T>(vertex[0], fn);
    for (let i = 1; i < vertex.length; i++) {
      heap.add(vertex[i]);
    }
    return heap;
  }

  makeVertex(start: nodeItem<T>): T[] {
    return this.vertex.filter(
      ([_s, _a, _v]: T) => start === _s || start === _a
    );
  }

  calc() {
    while (this.node.size !== this.size) {
      // vertex 선택
      const vertex = this.PriorityQueue.delete() as T;
      const [s, a, v] = vertex;
      // 이미 선택된 노드인지 확인
      const sCheck = this.node.has(Number(s));
      const aCheck = this.node.has(Number(a));

      // 두 개의 노드가 이미 선택된 노드라면 넘어간다.
      if (sCheck && aCheck) continue;
      // 데이터 추가
      const temp = sCheck ? a : s;
      this.select.push(vertex);
      this.node.add(temp);

      // 뽑은 노드와 연결된 vertex 모두 추가
      const addVertex = this.makeVertex(temp);
      for (const vertex of addVertex) {
        this.PriorityQueue.add(vertex);
      }
    }
    console.log("select : ", this.select);
  }
}

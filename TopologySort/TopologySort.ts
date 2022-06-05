export default class TopologySort<T extends number[]> {
  count: number[];
  vertexs: T[];
  size: number;
  sort: Set<number>;
  queue: number[];

  constructor(vertexs: T[], size: number) {
    this.vertexs = vertexs;
    this.size = size + 1;
    this.queue = [];
    this.count = this.init();
    this.sort = this.sortInit();
    this.calc();
  }

  init(): number[] {
    const arr = Array.from({ length: this.size }, (x) => 0);
    this.vertexs.forEach(([_s, _a, _v]: T) => arr[_a]++);
    return arr;
  }

  sortInit(): Set<number> {
    const arr: Set<number> = new Set([]);
    for (let i = 1; i < this.size; i++) {
      const target = this.count[i];
      if (target !== 0) continue;
      arr.add(i);
      this.queue.push(i);
    }
    return arr;
  }

  getVertexs(node: number): T[] {
    const vertexs = this.vertexs.filter((vertex) => vertex[0] === node);
    this.vertexs = this.vertexs.filter((vertex) => vertex[0] !== node);
    return vertexs;
  }

  removeVertex([s, a, v]: T): boolean {
    this.count[a]--;
    return this.count[a] === 0;
  }

  calc() {
    while (this.queue.length > 0) {
      const [node, ..._v] = this.queue;
      this.queue = _v;
      const vertexs = this.getVertexs(node);
      if (vertexs.length === 0) break;
      for (const vertex of vertexs) {
        if (this.removeVertex(vertex)) {
          const target = vertex[1];
          this.sort.add(target);
          this.queue.push(target);
        }
      }
    }
    console.log(this.sort);
  }
}

// count 배열 생성해서 연결된 간선 갯수 정리
// 출발하는 노드에서 연결된 간선 갯수만큼 count 배열 정리
// count 배열 중 값이 0 인 노드 선택

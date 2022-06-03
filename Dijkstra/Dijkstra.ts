type itemType<T> = keyof T;
type NodeType<T> = T[itemType<T>] & number;

export class Dijkstra<T extends NodeType<T>[]> {
  node: NodeType<T>[]; // [0,infinty,infinty,infinty,infinty,]
  start: NodeType<T>;
  arrive: NodeType<T>;
  select: Set<NodeType<T>>;
  vertexs: T[];
  size: number;

  constructor(arr: T[], start: NodeType<T>, arrive: NodeType<T>, size: number) {
    this.size = size;
    this.vertexs = arr;
    this.select = new Set([start]);
    this.start = start;
    this.arrive = arrive;
    this.node = this.initNode();
    this.getVertexs(start);
    this.calc();
  }

  initNode(): NodeType<T>[] {
    let newArr = [...Array.from({ length: this.size }, (x) => Infinity)];
    newArr[this.start] = 0;
    return newArr as NodeType<T>[];
  }

  transNode(start: NodeType<T>, arrive: NodeType<T>, value: NodeType<T>) {
    const prev = this.node[arrive];
    const next = (this.node[start] + value) as NodeType<T>;
    this.node[arrive] = prev < next ? prev : next;
  }

  getVertexs(node: NodeType<T>): T[] {
    return this.vertexs.filter(([_s, _a, _v]) => _s === node || _a === node);
  }

  getShortNode(): NodeType<T> {
    let targetNodeIdx;
    let minValue = Infinity;

    for (let i = 1; i < this.node.length; i++) {
      if (minValue > this.node[i] && !this.select.has(i as NodeType<T>)) {
        minValue = this.node[i];
        targetNodeIdx = i;
      }
    }
    return targetNodeIdx as NodeType<T>;
  }
  calc(): void {
    let targetNode = this.start;
    while (targetNode !== this.arrive) {
      const vertexs = this.getVertexs(targetNode);
      for (const [s, a, v] of vertexs) {
        const tempStartNode = s === targetNode ? s : a;
        const tempArriveNode = s === targetNode ? a : s;
        this.transNode(tempStartNode, tempArriveNode, v);
      }
      targetNode = this.getShortNode();
      this.select.add(targetNode);
    }
    console.log(this.node[this.arrive]);
  }
}

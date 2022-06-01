export class Kruskal {
  nodeLength: number;
  vertexLength: number;
  linkVertex: number[][];
  vertex: number[][];
  unionFind: number[];

  constructor(nodeLength: number, vertexLength: number, arr: number[][]) {
    this.nodeLength = nodeLength;
    this.vertexLength = vertexLength;
    this.vertex = arr.sort(([s, a, v], [_s, _a, _v]) => v - _v);
    this.linkVertex = [];
    this.unionFind = Array.from({ length: this.nodeLength + 1 }, (v, i) => i);
    this.getMST();
  }

  getMST() {
    for (const arg of this.vertex) {
      if (this.checkCycle(arg)) continue;
      this.linkVertex.push(arg);
      this.addUnion(arg);
    }
    console.log(this.checkMST());
  }

  checkMST(): number {
    return this.linkVertex.length === this.nodeLength - 1
      ? this.countVertex()
      : -1;
  }

  countVertex(): number {
    let count = 0;
    for (const [s, a, v] of this.linkVertex) {
      count += v;
    }
    return count;
  }

  checkCycle([start, arrive, _]: number[]): boolean {
    const startParent = this.findParent(start);
    const arriveParent = this.findParent(arrive);
    if (startParent === arriveParent) return true;
    return false;
  }

  findParent(n: number): number {
    return this.getParent(n);
  }

  getParent(n: number): number {
    if (this.unionFind[n] === n) return n;
    return (this.unionFind[n] = this.getParent(this.unionFind[n]));
  }

  addUnion([start, arrive, _]: number[]) {
    const startParent = this.findParent(start);
    const arriveParent = this.findParent(arrive);
    if (startParent > arriveParent) this.unionFind[startParent] = arriveParent;
    else this.unionFind[arriveParent] = startParent;
  }
}

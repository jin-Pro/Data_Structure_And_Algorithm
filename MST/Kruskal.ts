export class Kruskal {
  nodeLength: number;
  vertexLength: number;
  linkVertex: number[][];
  vertex: number[][];
  graphList: listType;

  constructor(nodeLength: number, vertexLength: number, arr: number[][]) {
    this.nodeLength = nodeLength;
    this.vertexLength = vertexLength;
    this.vertex = arr.sort(([s, a, v], [_s, _a, _v]) => v - _v);
    this.linkVertex = [];
    this.graphList = {};
    this.getMST();
  }

  makeList(obj: listType, [s, a, v]: number[]): void {
    if (obj[s]) {
      obj[s].push([a, v]);
    } else {
      obj[s] = [[a, v]];
    }
  }

  getMST() {
    for (const arg of this.vertex) {
      if (this.checkCycle(arg)) continue;
      this.linkVertex.push(arg);
      this.makeList(this.graphList, arg);
    }
    console.log(this.checkMST());
  }

  checkCycle(vertex: number[]): boolean {
    for (const key of Object.keys(this.graphList)) {
      const visit = Array.from(new Array(this.nodeLength), (x) => false);
        for (const [a,v] of this.graphList[Number(key)]){
            if(visit[a]) return false;

        }
    }
    return false;
  }
  dfs(visit:boolean[],key:number){
    for (const [a,v] of this.graphList[key]){
        if(visit[a]) return false;
        visit[a] = true;
        this.dfs(visit,a)
    }
    return true;
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
}

type listType = {
  [index: number]: number[][];
};

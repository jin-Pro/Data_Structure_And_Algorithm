export class Heap<T> {
  tree: T[];
  length: number;
  sort: FunctionType<T>;

  constructor(value: T, fn: FunctionType<T>) {
    this.tree = [value];
    this.sort = fn;
    this.length = this.tree.length;
  }

  // 추가
  add(value: T) {
    this.tree?.push(value);
    this.length = this.tree.length ?? 0;
    // tree 정렬
    this.bottomUP();
  }

  // 삭제
  delete(): string | T {
    if (!this.tree) return "존재하는 데이터가 없습니다.";
    const lastIdx = this.length - 1;

    const end = this.tree[lastIdx];
    const root = this.tree[0];
    this.tree[0] = end;

    // tree 정렬
    this.topDown();

    this.tree.length = lastIdx;
    this.length = this.tree.length;
    return root;
  }

  // 데이터 읽기
  peek(): string | T {
    if (!this.tree) return "존재하는 데이터가 없습니다.";
    return this.tree[0];
  }

  // 사이즈 확인
  size(): number {
    return this.length;
  }

  // add sort
  bottomUP(): void {
    let idx = this.length - 1;
    const target = this.tree[idx];
    let [parentIdx, parent] = getBottomUpData(idx, this.tree);
    //최대 힙
    while (this.sort(parent, target)) {
      this.tree[idx] = parent;
      this.tree[parentIdx] = target;
      idx = parentIdx;
      [parentIdx, parent] = getBottomUpData(idx, this.tree);
      if (!parent) break;
    }
  }

  // delete sort
  topDown(): void {
    let idx = 0;
    const target = this.tree[idx];
    let [leftChildIdx, rightChildIdx] = getTopDownIdx(idx);
    let [leftChildNode, rightChildNode] = getTopDownNode(idx, this.tree);
    while (
      leftChildNode &&
      rightChildNode &&
      (this.sort(target, leftChildNode) || this.sort(target, rightChildNode))
    ) {
      let [tempIdx, temp] = getTempChildData(
        rightChildIdx,
        leftChildIdx,
        this.tree,
        this.sort
      );
      this.tree[idx] = temp;
      this.tree[tempIdx] = target;
      idx = tempIdx;
      [leftChildIdx, rightChildIdx] = getTopDownIdx(idx);
      [leftChildNode, rightChildNode] = getTopDownNode(idx, this.tree);
      if (!leftChildNode || !rightChildNode) break;
    }
  }
}

export type FunctionType<T> = (num1: T, num2: T) => boolean;
// const fn: FunctionType<number> = (num1, num2) => num1 < num2;

type getTopDownIdxType = (idx: number) => [number, number];
const getTopDownIdx: getTopDownIdxType = (idx) => [idx * 2 + 1, idx * 2 + 2];

type getTopDownNodeType = <T>(idx: number, tree: T[]) => [T, T];
const getTopDownNode: getTopDownNodeType = (idx, tree) => [
  tree[idx * 2 + 1],
  tree[idx * 2 + 2],
];

type getBottomUpType = <T>(idx: number, tree: T[]) => [number, T];
const getBottomUpData: getBottomUpType = (idx, tree) => [
  Math.floor((idx + 1) / 2) - 1,
  tree[Math.floor((idx + 1) / 2) - 1],
];

type getTempChildDataType = <T>(
  right: number,
  left: number,
  tree: T[],
  fn: FunctionType<T>
) => [number, T];
const getTempChildData: getTempChildDataType = (
  rightChildIdx,
  leftChildIdx,
  tree,
  fn
) => {
  const leftChildNode = tree[leftChildIdx];
  const rightChildNode = tree[rightChildIdx];
  const leftLargeThanRight = fn(rightChildNode, leftChildNode);
  let temp = leftLargeThanRight ? leftChildNode : rightChildNode;
  let tempIdx = leftLargeThanRight ? leftChildIdx : rightChildIdx;
  return [tempIdx, temp];
};

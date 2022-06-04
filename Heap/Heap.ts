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
    this.tree.push(value);
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

  getLeftChildIdx(parentIdx: number) {
    return parentIdx * 2 + 1;
  }

  getRightChildIdx(parentIdx: number) {
    return parentIdx * 2 + 2;
  }

  getParentIdx(childNodeIdx: number): number {
    return Math.floor((childNodeIdx + 1) / 2) - 1;
  }

  getLeftChildNode(parentIdx: number) {
    return this.tree[this.getLeftChildIdx(parentIdx)];
  }

  getRightChildNode(parentIdx: number) {
    return this.tree[this.getRightChildIdx(parentIdx)];
  }

  getParentNode(childNodeIdx: number) {
    return this.tree[this.getParentIdx(childNodeIdx)];
  }

  swap(idx1: number, idx2: number) {
    const target1 = this.tree[idx1];
    const target2 = this.tree[idx2];
    this.tree[idx1] = target2;
    this.tree[idx2] = target1;
  }

  // add sort
  bottomUP(): void {
    let idx = this.length - 1;
    const target = this.tree[idx];
    let parentIdx = this.getParentIdx(idx);
    let parent = this.getParentNode(idx);
    //최대 힙
    while (parent && this.sort(parent, target)) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = this.getParentIdx(idx);
      parent = this.getParentNode(idx);
    }
  }

  getTempChildData(idx: number): number {
    const leftChildNode = this.getLeftChildNode(idx);
    const rightChildNode = this.getRightChildNode(idx);
    const leftLargeThanRight = this.sort(rightChildNode, leftChildNode);
    let tempIdx = leftLargeThanRight
      ? this.getLeftChildIdx(idx)
      : this.getRightChildIdx(idx);
    return tempIdx;
  }

  // delete sort
  topDown(): void {
    let idx = 0;
    const target = this.tree[idx];
    let leftChildNode = this.getLeftChildNode(idx);
    let rightChildNode = this.getRightChildNode(idx);
    while (
      leftChildNode &&
      rightChildNode &&
      (this.sort(target, leftChildNode) || this.sort(target, rightChildNode))
    ) {
      const tempIdx = this.getTempChildData(idx);
      this.swap(idx, tempIdx);
      idx = tempIdx;
      leftChildNode = this.getLeftChildNode(idx);
      rightChildNode = this.getRightChildNode(idx);
    }
  }
}

export type FunctionType<T> = (num1: T, num2: T) => boolean;

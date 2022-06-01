export class SegmentTree<T extends number> {
  size: number;
  max: number;
  tree: T[] | number[];
  node: T[] | number[];

  constructor(arr: T[]) {
    this.max = arr.length;
    this.size = this.max * 4;
    this.node = [0, ...arr];
    this.tree = [0, ...arr];
    this.init(0);
    // this.init(0,1,this.max);
  }

  init(index: number, start: number = 1, end: number = this.max): T | number {
    if (start === end) {
      this.tree[index] = this.node[start];
      return this.tree[index];
    }
    let mid = Math.floor((start + end) / 2);

    this.tree[index] =
      this.init(index * 2 + 1, start, mid) +
      this.init(index * 2 + 2, mid + 1, end);

    return this.tree[index];
  }

  update(
    index: number,
    target: number,
    diff: T,
    start: number = 1,
    end: number = this.max - 1
  ) {
    if (target < start || target > end) return;
    this.tree[index] += diff;
    if (start === end) this.node[start] += diff;
    else {
      const mid = Math.floor((start + end) / 2);
      this.update(index * 2 + 1, target, diff, start, mid);
      this.update(index * 2 + 2, target, diff, mid + 1, end);
    }
  }

  query(
    index: number,
    left: number,
    right: number,
    start: number = 1,
    end: number = this.max - 1
  ): T | number {
    if (left > end || right < start) return 0;
    if (left <= start && end <= right) return this.tree[index];
    const mid = Math.floor((start + end) / 2);
    return (
      this.query(index * 2 + 1, left, right, start, mid) +
      this.query(index * 2 + 2, left, right, mid + 1, end)
    );
  }
}

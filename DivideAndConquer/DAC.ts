export default class DivideAndConquer<T> {
  arr: T[];
  fn: Function;

  constructor(arr: T[], fn: Function) {
    this.arr = arr;
    this.fn = fn;
    this.calc();
  }

  calc(): void {
    const arr = this.divide(0, this.arr.length - 1, this.arr);
    console.log(arr);
  }

  divide(start: number, end: number, arr: T[]): T[] {
    if (start === end) return [arr[start]];
    const mid = Math.floor((start + end) / 2);
    return this.conquer(
      this.divide(start, mid, this.arr),
      this.divide(mid + 1, end, this.arr)
    );
  }

  conquer(arr1: T[], arr2: T[]): T[] {
    let left = 0;
    let right = 0;
    let answer: T[] = [];
    while (left < arr1.length && right < arr2.length) {
      if (this.fn(arr1[left], arr2[right])) {
        answer.push(arr1[left++]);
      } else {
        answer.push(arr2[right++]);
      }
    }
    while (left < arr1.length) {
      answer.push(arr1[left++]);
    }
    while (right < arr2.length) {
      answer.push(arr2[right++]);
    }
    return answer;
  }
}

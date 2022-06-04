export class node<T> {
  prev: node<T>;
  next: node<T>;
  value: T;

  constructor(value: T) {
    this.value = value;
    this.prev = this;
    this.next = this;
  }

  add(item: node<T>) {
    item.next = this.next;
    this.next.prev = item;
    this.next = item;
    item.prev = this;
  }

  remove() {
    if (this === this.next) {
      this.prev.next = this.prev;
    } else {
      this.next = this.next.next;
      this.next.prev = this;
    }
  }

  find(v: T, fn: Function): node<T> {
    let value = this.value;
    let target = this.next;
    while (fn(value) !== fn(v)) {
      value = target.value;
      target = target.next;
    }
    return target.prev;
  }

  getLastNode(): node<T> {
    let target = this.next;
    while (this.compareValue(target, target.next)) {
      target = target.next;
    }
    return target.prev;
  }

  compareValue(node1: node<T>, node2: node<T>): boolean {
    return !(
      JSON.stringify(node1.value) === JSON.stringify(node2.value) ||
      node1.prev.prev === node1
    );
  }
}

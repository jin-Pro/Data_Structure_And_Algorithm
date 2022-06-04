import { node } from "../Node/Node";

export type hashFnType<T> = (key: T) => number;
type linkedListType<T> = {
  key: number;
  value: T;
};

export default class HashTable<T extends number, V extends null | number> {
  table: node<linkedListType<V>>[];
  //   keys: object;
  keys: Record<T, number>;
  hashFn: hashFnType<T>;

  constructor(hashFn: hashFnType<T>, size = 36) {
    this.table = Array.from(
      { length: size },
      (x) => new node({ key: -1, value: null as V } as linkedListType<V>)
    );
    this.hashFn = hashFn;
    this.keys = {} as Record<T, number>;
  }

  add(key: T, value: V) {
    const hashKey = this.hashFn(key);
    this.keys[key] = hashKey;

    const linkedList = new node({
      key,
      value,
    });

    const lastNode = this.table[hashKey].getLastNode();
    lastNode.add(linkedList);
  }

  pick(key: T) {
    return this.table[this.hashFn(key)].find(
      { key: key, value: null as V },
      (item: linkedListType<V>) => item.key
    );
  }

  peek(key: T) {
    return this.pick(key).value.value;
  }

  delete(key: T) {
    const target = this.pick(key);
    target.remove();
    delete this.keys[key];
  }

  has(key: any) {
    return key in this.keys;
  }

  getKeys() {
    return Object.keys(this.keys);
  }
}

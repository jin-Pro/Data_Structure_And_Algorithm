export class node <T> {
  prev:NodeType<T>
  next : NodeType<T>
  value : T;

  constructor(value : T){
    this.value = value;
    this.prev = this;
    this.next = this;
    
  }

  add(item:NodeType<T>){
    item.next = this.next;
    this.next.prev = item;
    this.next = item;
    item.prev = this;
  }

  remove(){
    this.next = this.next.next;
    this.next.prev = this;
  }
}

type NodeType<T> = {
  prev: NodeType<T>;
  next: NodeType<T>;
  value : T;
};
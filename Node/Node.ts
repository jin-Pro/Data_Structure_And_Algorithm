export class node <T> {
  left:NodeType<T> | null;
  right:NodeType<T> | null;
  parent:NodeType<T> | null;
  value : T;

  constructor(value : T,parent : NodeType<T> | null = null){
    this.left = null;
    this.right = null;
    this.value = value;
    this.parent = parent;
  }

  add(item:NodeType<T>,type:'right' | 'left'){
    this[type] = item;
    item.parent = this;
  }

  remove(type:'right' | 'left'){
    this[type] = null;
  }

  print(){
    if(this.left) this.left.print();
    console.log(this.value);
    if(this.right) this.right.print();
  }
}

export interface NodeType<T> {
  left: NodeType<T> | null;
  right: NodeType<T> | null;
  parent: NodeType<T> | null;
  value : T;
  add : (item:NodeType<T>,type :'right'|'left') => void;
  remove : (type :'right'|'left') => void;
  print : () => void;
};
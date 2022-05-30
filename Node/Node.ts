export class node <T> {
  left:NodeType<T> | null;
  right:NodeType<T> | null;
  value : T;

  constructor(value : T){
    this.left = null;
    this.right = null;
    this.value = value;
  }

  add(type:'right' | 'left',value:T){
    const addNode = new node(value);
    this[type] = addNode;
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
  value : T;
  add : (type :'right'|'left',value:T) => void;
  remove : (type :'right'|'left') => void;
  print : () => void;
};
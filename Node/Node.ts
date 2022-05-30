export class node <T> {
  left:NodeType | null;
  right:NodeType | null;
  value : T;

  constructor(value : T){
    this.left = null;
    this.right = null;
    this.value = value;
  }

  add(item:NodeType,type:'right' | 'left'){
    this[type] = item;
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

interface NodeType {
  left: NodeType | null;
  right: NodeType | null;
  add : (item:NodeType,type :'right'|'left') => void;
  remove : (type :'right'|'left') => void;
  print : () => void;
};
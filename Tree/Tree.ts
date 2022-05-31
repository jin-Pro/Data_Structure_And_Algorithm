export class BinaryTree<T>{
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

  preOrderPrint(){
    console.log(this.value);
    if(this.left) this.left.preOrderPrint();
    if(this.right) this.right.preOrderPrint();
  }
  inOrderPrint(){
    if(this.left) this.left.inOrderPrint();
    console.log(this.value);
    if(this.right) this.right.inOrderPrint();
  }
  postOrderPrint(){
    if(this.left) this.left.postOrderPrint();
    if(this.right) this.right.postOrderPrint();
    console.log(this.value);
  }
}

type NodeType<T> = {
  left: NodeType<T> | null;
  right: NodeType<T> | null;
  parent: NodeType<T> | null;
  value : T;
  add : (item:NodeType<T>,type :'right'|'left') => void;
  remove : (type :'right'|'left') => void;
  preOrderPrint : () => void;
  inOrderPrint : () => void;
  postOrderPrint : () => void;
};
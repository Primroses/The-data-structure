class Node {
    // 节点类 私有属性 左右节点 为空 还有一个键
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    // 根节点是空
    constructor(){
        this.root = null
        this.node = new Node();
    }
    
    // 打印整棵树
    printNode(value){
        console.log(value);
    }

    // 向树插入一个键
    insert(key){
        let newNode = new Node(key);

        if(this.root==null){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode);
        }
    }

    insertNode(node , newNode){
        // 无限递归寻找 空的节点 但是 其中还需要判断 值的大小再放
        if(newNode.key < node.key){
            if(node.left === null){
                node.left = newNode;
            }else{
                this.insertNode(node.left,newNode);
            }
        }else{
            if(node.right === null){
                node.right = newNode;
            }else{
                this.insertNode(node.right,newNode);
            }
        }
    }

    // 树的遍历
    // (1)中序遍历(从最小到最大的顺序访问所有节点)
    inOrderTraverseNode(node, callback){
        if(node !==null){
            this.inOrderTraverseNode(node.left ,callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right,callback);
        }
    }
    inOrderTraverse(callback){
        this.inOrderTraverseNode(root,callback);
    }


    
    preOrderTraverseNode(node,callback){
        if(node!==null){
            callback(node.key);
            this.preOrderTraverseNode(node.left,callback);
            this.preOrderTraverseNode(node.right,callback);
        }
    }
    preOrderTraverse(callback){
        this.preOrderTraverseNode(root,callback);
    }

    min(){
        return this.minNode(root);
    }

    minNode(node){
        if(node){
            while(node&&node.left!==null){
                node = node.left;
            }
            return node.key;
        }
        return null;
    }
    // 寻找是否存在该值
    search(key){
        return this.searchNode(root,key);
    }

    searchNode(node,key){
        if(node===null){
            return false;
        }
        if(key < node.key){
            return this.searchNode(node.left,key);
        }else if(key>node.key){
            return searchNode(node.right,key);

        }else{
            return true;
        }
    }

    remove(key){
        this.root = removeNode(root,key)
    }

    removeNode(node,key){
        // 这棵树什么都没有
        if(node ===null){
            return null
        }
        if(key < node.key){
            node.left = this.removeNode(node.left,key);
            return node;
        }else if(key > node.key){
            node.right = removeNode(node.right,key);
            return node;
        }else{
            if(node.left === null && node.right ===null){
                node = null;
                return node;
            }
            if(node.left === null){
                node = node.right;
                return node;
            }else if(node.right === null){
                node = node.left;
                return node;
            }

            let aux = this.findMinNode(node,right);
            node.key = aux.key;
            node.right = removeNode(node.right,aux.key);
            return node;
        }
    }
}

let tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
// console.log(tree);

tree.inOrderTraverse(this.printNode)
// tree.preOrderTraverse(this.printNode)
// console.log(tree.search(20))
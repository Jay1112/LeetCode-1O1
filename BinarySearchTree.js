class TreeNode {
    data ;
    left ;
    right ;

    constructor(data){
        this.data = data ; 
        this.left = null ;
        this.right = null ;
    }
}

class BinarySearchTree {
    root ;

    constructor(){
        this.root = null ;
    }

    inorder(node,arr){
        if(!node){
            return ;
        }
        this.inorder(node.left,arr);
        arr.push(node.data);
        this.inorder(node.right,arr);
    }

    print(){
        let arr = [];
        let curr = this.root ;
        this.inorder(curr,arr);
        console.log(arr);
    }

    InsertNode(node,data){
        if(!node){
            node = new TreeNode(data);
            return node;
        }

        if(node.data < data){
            node.right = this.InsertNode(node.right,data);
        }else if(node.data > data){
            node.left = this.InsertNode(node.left,data);
        }

        return node;
    }

    insert(data){
        let curr = this.root ;
        this.root = this.InsertNode(curr,data);
    }

    findMinNode(node){
        if(!node){
            return null;
        }
        while(node.left){
            node = node.left ;
        }
        return node ;
    }

    DeleteNode(node,data){
        if(!node){
            return null;
        }

        if(node.data < data){
            node.right = this.DeleteNode(node.right,data);
        }else if(node.data > data){
            node.left = this.DeleteNode(node.left,data);
        }else{
            if(!node.left && !node.right ){
                node = null ; 
                return null ;
            }else if(!node.left){
                return node.right;
            }else if(!node.right){
                return node.left;
            }else{
                let minNode = this.findMinNode(node.right);
                node.data = minNode.data ;
                minNode.data = data ; 
                node.right = this.DeleteNode(node.right,data);
            }
        }

        return node;
    }

    delete(data){
        let curr = this.root ; 
        this.root = this.DeleteNode(curr,data);
    }

    SearchNode(node,data){
        if(!node){
            return false;
        }

        if(node.data === data){
            return true;
        }else if(node.data < data){
            return this.SearchNode(node.right,data)
        }else{
            return this.SearchNode(node.left,data);
        }
    }

    search(data){
        let curr = this.root; 
        const isFound = this.SearchNode(curr,data);
        if(isFound){
            console.log(`${data} is found in BST`);
        }else{
            console.log(`${data} is not found in BST`);
        }
    }

    getRootData(){
        if(!this.root){
            return "Root Doesn't Exist!!";
        }
        return this.root.data ;
    }
}

const obj = new BinarySearchTree();

module.exports = { obj }
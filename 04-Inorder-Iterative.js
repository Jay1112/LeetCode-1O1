// TC : O(n)
// SC : O(n)

class Stack {
    stack     = null ; 
    length  = null ; 

    constructor(){
        this.stack = [];
        this.length = 0 ;
    }

    empty(){
        return this.length === 0 ? true : false;
    }

    push(data){
        this.stack.push(data);
        this.length = this.length + 1;
    }

    pop(){
        if(this.length === 0){
            return ;
        }
        this.stack.pop();
        this.length = this.length - 1;
    }

    top(){
        if(this.length === 0){
            return null;
        }
        return this.stack[this.length - 1];
    }
}

function InOrder(root){
    if(root === null){
        return [];
    }
    let st = new Stack();
    let curr = root ; 
    let result = []
    while(1){
        if(curr){
            st.push(curr);
            curr = curr.left;
        }else{
            if(st.empty()){
                break;
            }
            let top = st.top();
            st.pop(); 
            result.push(top.val);
            curr = top.right;
        }
    }
    return result;
}
var inorderTraversal = function(root) {
    let result = InOrder(root);
    return result ;
};
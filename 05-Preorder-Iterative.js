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

function PreOrder(root){
    if(root === null){
        return [];
    }
    let st = new Stack();
    let curr = root ; 
    let result = [] ; 
    st.push(curr);
    while(!st.empty())
    {
        let top = st.top() ; 
        result.push(top.val);
        st.pop();
        if(top.right){
            st.push(top.right);
        }
        if(top.left){
            st.push(top.left);
        }
    }

    return result;
}
var preorderTraversal = function(root) {
    let result = PreOrder(root);
    return result ;
};
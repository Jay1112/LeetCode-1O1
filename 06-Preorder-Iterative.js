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

function PostOrder(root){
    if(root === null){
        return [];
    }
    let st1 = new Stack();
    let st2 = new Stack();
    let curr = root ; 

    st1.push(curr);

    while(!st1.empty()){
        let top = st1.top() ; 
        st1.pop();

        st2.push(top.val);

        if(top.left){
            st1.push(top.left);
        }
        if(top.right){
            st1.push(top.right);
        }
    }

    let result = [];
    while(!st2.empty()){
        result.push(st2.top());
        st2.pop();
    }

    return result;
}
var postorderTraversal = function(root) {
    let result = PostOrder(root);
    return result ;
};
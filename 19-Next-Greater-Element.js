// TC : O(m + n)
// SC : O(m + n)

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


var nextGreaterElement = function(nums1, nums2) {
    let store = new Map();
    let st = new Stack();

    for(let i = nums2.length - 1 ; i >= 0; i-- ){
        const ele = nums2[i];
        if(st.empty()){
            st.push(ele);
            store.set(ele,-1);
        }else{
            while(!st.empty() && st.top() <= ele ){
                st.pop();
            }
            if(st.empty()){
                store.set(ele,-1);
            }else{
                store.set(ele,st.top());
            }
            st.push(ele);
        }
    }

    let result = new Array(nums1.length).fill(-1);

    for(let i = 0 ; i < nums1.length; i++){
        result[i] = store.get(nums1[i]);
    }

    return result;
};
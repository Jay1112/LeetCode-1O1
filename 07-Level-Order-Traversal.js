// TC : O(n)
// SC : O(n)

class QueueDS {
    queue     = null ; 
    length    = null ; 

    constructor(){
        this.queue = [];
        this.length = 0 ;
    }

    getSize(){
        return this.queue.length ;
    }

    empty(){
        return this.length === 0 ? true : false;
    }

    push(data){
        this.queue.push(data);
        this.length = this.length + 1;
    }

    pop(){
        if(this.length === 0){
            return ;
        }
        this.queue.shift();
        this.length = this.length - 1;
    }

    front(){
        if(this.length === 0){
            return null;
        }
        return this.queue[0];
    }
}
var levelOrder = function(root) {
    let ans = [];
    if(root === null){
        return ans;
    }

    let q = new QueueDS();
    q.push(root);

    while(!q.empty()){
        let size = q.getSize();
        let temp = [];
        while(size--){
            let front = q.front();
            temp.push(front.val);
            q.pop();

            if(front.left){
                q.push(front.left);
            }
            if(front.right){
                q.push(front.right);
            }
        }
        ans.push(temp);
    }

    return ans;
};
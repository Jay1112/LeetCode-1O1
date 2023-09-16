// TC : O(N)
// SC : O(N)

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
var zigzagLevelOrder = function(root) {
    if(root === null){
        return [];
    }

    let q = new QueueDS();
    q.push(root);

    let ans = [];
    let doReverse = false;

    while(!q.empty())
    {
        let size = q.getSize() ;
        let arr = [];

        while(size--){
            const node = q.front(); 
            arr.push(node.val);
            q.pop();

            if(node.left){
                q.push(node.left);
            }
            if(node.right){
                q.push(node.right);
            }
        }

        if(doReverse){
            arr = arr.reverse();
        }
        doReverse = !doReverse;

        ans.push(arr);
    }

    return ans;
};
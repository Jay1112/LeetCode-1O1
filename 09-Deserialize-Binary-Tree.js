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

module.exports = { 
	solve : function(A){
        if(A.length === 0 || A[0] === -1){
            return null;
        }
        let q = new QueueDS();
        const root = new TreeNode(A[0]);
        q.push(root);
        let index = 1;

        while(!q.empty())
        {
            let front = q.front();
            q.pop();
            if(A[index] !== -1){
                const newNode = new TreeNode(A[index]);
                front.left = newNode ;
                q.push(front.left);
            }
            index++;
            if(A[index] !== -1){
                const newNode = new TreeNode(A[index]);
                front.right = newNode ;
                q.push(front.right);
            }
            index++;
        }

        return root;

	}
};

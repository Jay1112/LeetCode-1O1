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
	solve : function(root){
		if(root === null){
			return [];
		}

		let q = new QueueDS();
		q.push(root);

		let ans = [];

		while(!q.empty()){
			let size = q.getSize() ;
            while(size--){
                const front = q.front();
                q.pop() ;
                if(front === null){
                    ans.push(-1);
                    continue;
                }

                ans.push(front.data);

                if(front.left){
                    q.push(front.left);
                }else{
                    q.push(null);
                }
                if(front.right){
                    q.push(front.right);
                }else{
                    q.push(null);
                }
            }
		}

		return ans;
	}
};

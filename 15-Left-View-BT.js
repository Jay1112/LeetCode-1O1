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

module.exports = { 
	solve : function(root){
		let ans = [];
		if(!root){
			return ans;
		}
		const q = new QueueDS();
		q.push(root);
		while(!q.empty())
		{
			let size = q.getSize();
			let temp = null;
			while(size--)
			{
				const front = q.front();
				q.pop();
				if(temp === null){
					temp = front.data ;
				}
				if(front.left){
					q.push(front.left);
				}
				if(front.right){
					q.push(front.right);
				}
			}
			if(temp !== null){
				ans.push(temp);
			}
		}
		return ans;
	}
};

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
	solve : function(A){
		if(!A){
			return [];
		}
		let q = new QueueDS();
		let map = {};
		q.push({ node : A, level : 0 });
		while(!q.empty()){
			let size = q.getSize() ;
			while(size--)
			{
				const {node,level} = q.front();
				q.pop();

				if(map.hasOwnProperty(level)){
					map[level] = [...map[level],node.data]
				}else{
					map[level] = [node.data];
				}

				if(node.left){
					q.push({ node : node.left, level : level - 1 });
				}
				if(node.right){
					q.push({ node : node.right, level : level + 1 });
				}
			}
		}
		let ans = [];
		let keys = Object.keys(map);
		for(let i = 0 ; i < keys.length; i++)
		{
			const item = map[keys[i]][0];
			ans.push(item);
		}
		return ans;
	}
};

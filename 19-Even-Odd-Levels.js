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
        if(A === null){
            return 0;
        }

        let q = new QueueDS();
        q.push(A);

        let toggle = false;

        let evenSum = 0 ; 
        let oddSum  = 0 ;

        while(!q.empty())
        {
            let size = q.getSize() ; 
            while(size--)
            {
                let node = q.front(); 
                q.pop();

                if(toggle){
                    evenSum = evenSum + node.data ; 
                }else{
                    oddSum = oddSum + node.data ;
                }

                if(node.left){
                    q.push(node.left);
                }

                if(node.right){
                    q.push(node.right);
                }
            }

            toggle = !toggle ;
        }

        return oddSum - evenSum ;
	}
};

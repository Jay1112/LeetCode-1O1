// TC : O(N + HlogH )
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

var verticalTraversal = function(root) {
    if(root === null){
        return [];
    }
    let map = new Map();
    let q = new QueueDS();
    q.push({ node : root, level : 0, row : 0});
    while(!q.empty())
    {
        const item = q.front();
        q.pop();

        if(map.get(item.level)){
            const imap = map.get(item.level) ;
            if(imap.get(item.row)){
                imap.set(item.row,[...imap.get(item.row),item.node.val]);
            }else{
                imap.set(item.row,[item.node.val]);
            }
        }else{
            const imap = new Map();
            imap.set(item.row,[item.node.val]);
            map.set(item.level,imap);
        }

        if(item.node.left){
            q.push({ node : item.node.left, level : item.level - 1 , row : item.row + 1});
        }
        if(item.node.right){
            q.push({ node : item.node.right, level : item.level + 1, row : item.row + 1 });
        }
    }

    const levels = Array.from(map.keys()).sort((a,b)=>{
        return a-b;
    });

    let ans = [];
    for(let i = 0 ; i < levels.length ; i++)
    {
        let data = [];
        let arr = map.get(levels[i]);
        const rows = Array.from(arr.keys());
        for(let j = 0 ; j < rows.length ; j++)
        {
            let item = arr.get(rows[j]).sort((a,b)=>a-b);
            data = [...data,...item];
        }
        ans = [...ans,data]
    }

    return ans;

};

























// TC : O(N)
// SC : O(N)

var wordPattern = function(pattern, s) {
    const res = s.split(' ');
    const map1 = new Map();
    const map2 = new Map();

    if(res.length !== pattern.length){
        return false;
    }

    for(let i = 0 ; i < pattern.length ; i++)
    {
        const item = pattern[i] ; 
        const target = res[i] ;

        const ans1 = map1.get(item);
        const ans2 = map2.get(target);

        if(!ans1 && !ans2){
            map1.set(item,target);
            map2.set(target,item);        
        }else if(!ans1 || !ans2){
            return false;
        }else if( ans1 ===  target && ans2 === item){
            continue;
        }else{
            return false;
        }
    }
    return true;
};
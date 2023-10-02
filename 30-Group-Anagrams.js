// TC : O( n * m * log(m) )
// SC : O(n)

// n is the length of the array
// m is the length of each string on avg

var groupAnagrams = function(strs) {
    const map = new Map();
    for(let i = 0 ; i < strs.length ; i++){
        let item = strs[i];
        item = item.split('').sort().join('');
        if(map.get(item)){
            const res = map.get(item);
            map.set(item,[...res,strs[i]]);
        }else{
            map.set(item,[strs[i]]);
        }
    }
    const ans = [];
    for (let [key, value] of map) {
        ans.push(value);   
    }
    return ans;
};
// TC : O(N)
// SC : O(N)

var isIsomorphic = function(s, t) {
    let map1 = new Map();
    let map2 = new Map();
    if(s.length !== t.length){
      return false;
    }
    for(let i = 0 ; i < s.length ; i++){
      const ans1 = map1.get(s[i]);
      const ans2 = map2.get(t[i]);

      if(!ans1 && !ans2){
        map1.set(s[i],t[i]);
        map2.set(t[i],s[i]);
      }else if(ans1 !== t[i] || ans2 !== s[i]){
        return false;
      }
    }

    return true;
};
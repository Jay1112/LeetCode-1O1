// TC : O(m + n)
// SC : O(1)

// m is the length of s 
// n is the length of t

var isAnagram = function(s, t) {
    let counter = new Array(256).fill(0) ; 

    for(let i = 0 ; i < s.length ; i++){
        const ch = s[i] ; 
        const asc = ch.charCodeAt();
        counter[asc] = counter[asc] + 1;
    }

    for(let i = 0 ; i < t.length ; i++){
        const ch = t[i] ; 
        const asc = ch.charCodeAt();
        counter[asc] = counter[asc] - 1;
    }

    for(let i = 0 ; i < 256; i++){
        if(counter[i] != 0){
            return false;
        }
    }

    return true;
};
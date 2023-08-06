// TC : O(m*n)
// SC : O(1)

// m is the minimum length of the string inn the given array 
// n is the length of the given array

var longestCommonPrefix = function(strs) {
    if(strs.length == 1){
        return strs[0] ;
    }

    const str = strs[0] ; 
    let ans = '' ; 
    for(let i = 0 ; i < str.length ; i++){
        const ch = str[i] ;
        let flag = 0 ; 
        for(let j = 0 ; j < strs.length ; j++){
            if(i < strs[j].length && ch == strs[j][i]){
                continue;
            }else{
                flag = 1 ; 
                break;
            }
        }
        if(flag == 1){
            break;
        }
        ans += str[i];
    }

    return ans;
};
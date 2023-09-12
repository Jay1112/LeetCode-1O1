// TC : O(n*m)
// SC : O(1)

var strStr = function(s1, s2) {
    if(s1.length < s2.length){
        return -1;
    }

    for(let i = 0 ; i <= s1.length - s2.length; i++)
    {
        let temp = "";
        for(let j = 0 ; j < s2.length; j++)
        {
            if(s1[i+j] === s2[j]){
                temp = temp + s2[j];
            }else{
                break;
            }
        }

        if(temp === s2){
            return i;
        }
    }

    return -1;
};
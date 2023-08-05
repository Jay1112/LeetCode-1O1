// TC : O(n)
// SC : O(1)

var isSubsequence = function(s, t) {
    let l1 = s.length ;
    let l2 = t.length ;

    if(l1 > l2){
        return false;
    }

    let ind1 = 0 ; 
    let ind2 = 0 ; 

    while(ind1 < l1 && ind2 < l2){
        if(s[ind1] == t[ind2]){
            ind1++;
            ind2++;
        }else{
            ind2++;
        }
    }

    if(ind1 == l1){
        return true;
    }

    return false;
};
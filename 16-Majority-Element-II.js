// TC : O(n)
// SC : O(1)

var majorityElement = function(nums) {
    let m1 = null, c1 = 0 ;
    let m2 = null, c2 = 0 ; 

    for(let i = 0 ; i < nums.length; i++){
        if(m1 === nums[i]){
            c1++;
        }else if(m2 === nums[i]){
            c2++;
        }else if(m1 == null){
            m1 = nums[i] ; 
            c1 = 1 ; 
        }else if(m2 === null){
            m2 = nums[i];
            c2 = 1 ;
        }else{
            c1--;
            c2--;
        }

        if(c1 === 0){
            m1 = null;
        }
        if(c2 === 0){
            m2 = null;
        }
    }

    c1 = 0 ; c2 = 0 ; 
    const threshold = Math.floor(nums.length/3) ;

    for(let i = 0 ; i < nums.length ; i++){
        if(m1 === nums[i]){
            c1++;
        }
        if(m2 === nums[i]){
            c2++;
        }
    }
    let ans = [];
    if(c1 > threshold){
        ans.push(m1);
    }
    if(c2 > threshold){
        ans.push(m2);
    }

    return ans;
};
// TC : O(n * n)
// SC : O(n)

var lengthOfLIS = function(nums) {
    if(nums.length === 1){
        return 1;
    }
    let dp = new Array(nums.length).fill(0);
    dp[0] = 1 ;  
    let max = 0 ; 
    for(let i = 1 ; i < nums.length; i++)
    {
        let ans = 0 ; 
        for(let j = 0 ; j < i ; j++ )
        {
            if(nums[j] < nums[i]){
                ans = Math.max(dp[j] + 1,ans);
            }
        }

        if(ans === 0){
            dp[i] = 1 ; 
        }else{        
            dp[i] = ans ;
        }
        max = Math.max(dp[i],max);
    }

    return max;
};
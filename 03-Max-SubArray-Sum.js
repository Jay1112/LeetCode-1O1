// TC : O(n)
// SC : O(1)

var maxSubArray = function(nums) {
    let max_sum = -10001 ; 
    let end_sum = 0 ; 

    for(let i = 0 ; i < nums.length ; i++){
        end_sum = end_sum + nums[i] ; 
        
        max_sum = Math.max(max_sum,end_sum);

        if(end_sum < 0){
            end_sum = 0 ; 
        }
    }

    return max_sum ;
};
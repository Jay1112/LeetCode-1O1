// TC : O(N)
// SC : O(1)

var pivotIndex = function(nums) {
    if(nums.length === 1){
        return 0;
    }
    let left_sum = 0 , right_sum = 0 ; 
    for(let i = 0 ; i < nums.length; i++){
        right_sum = right_sum + nums[i];
    }
    for(let i = 0 ; i < nums.length ; i++){
        right_sum = right_sum - nums[i] ;
        if(left_sum === right_sum){
            return i;
        }
        left_sum = left_sum + nums[i];
    }
    return -1;
};
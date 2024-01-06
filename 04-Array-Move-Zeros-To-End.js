// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// TC : O(n)
// SC : O(1)

var moveZeroes = function(nums) {
    let i = 0, j = 0 ; 
    while(i < nums.length && j < nums.length){
        if(nums[i] === 0 && nums[j] === 0){
            j++;
        }else if(nums[i] === 0 && nums[j] !== 0){
            let temp = nums[i] ; 
            nums[i] = nums[j] ; 
            nums[j] = temp ;
            i++;
        }else if(nums[i] !== 0 && nums[j] === 0){
            i++;
        }else{
            i++;
            j++;
        }
    }
    return nums;
};
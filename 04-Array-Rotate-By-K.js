/*

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

*/

// TC : O(N)
// SC : O(1)

var moveZeroes = function(nums) {
    let length = nums.length ; 
    let i = 0 , j = 0 ; 

    while(i < length && j < length){
        if(nums[i] === 0 && nums[j] === 0){
            j++;
        }else if(nums[i] === 0 && nums[j] !== 0){
            let temp = nums[i];
            nums[i] = nums[j] ; 
            nums[j] = temp ;
            i++; j++;
        }else if(nums[i] !== 0 && nums[j] === 0){
            i++; j++;
        }else{
            i++; j++;
        }
    }
};
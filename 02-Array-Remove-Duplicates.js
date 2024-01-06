// Remove Duplicates from sorted Array

// TC : O(n)
// SC : O(1)

var removeDuplicates = function(nums) {
    let i = 0 , j = 0 ;
    while(i < nums.length && j < nums.length){
        if(nums[i] !== nums[j]){
            i++;
            nums[i] = nums[j];
        }
        j++;
    }
    return i+1;
};
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// TC : O(n)
// SC : O(1)

function reverseArray(nums,start,end){
    let times = Math.floor((end - start + 1) / 2) ;
    let counter = 0 ; 
    while(counter < times){
        let temp = nums[start] ; 
        nums[start] = nums[end];
        nums[end] = temp;
        start++; end--;
        counter++;
    }
    return nums;
}

var rotate = function(nums, k) {
    const length = nums.length ; 
    k = k % length ;
    nums = reverseArray(nums,0,length-1);
    nums = reverseArray(nums,0,k-1);
    nums = reverseArray(nums,k,length-1);
            
    return nums;
};
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// TC : O(n)
// SC : O(1)

var singleNumber = function(nums) {
    let answer = 0 ; 
    for(let item of nums){
        answer = answer ^ item;
    }
    return answer;
};
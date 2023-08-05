// TC : O(N)
// SC : O(N)

var getConcatenation = function(nums) {
    const length = nums.length ; 
    let arr = new Array(length).fill(0) ;

    for(let i = 0 ;i < length; i++){
        arr[i] = nums[i] ; 
        arr[i + length] = nums[i];
    }

    return arr ;
};
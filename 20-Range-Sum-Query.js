// TC : O(n + q) 
// SC : O(n)

// n is the length of the array
// q is the total numbers of queries

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums ; 
    this.calculate = function(nums){
        let sum = 0 ; 
        let ans = [];
        for(let i = 0 ; i < nums.length; i++){
            sum = sum + nums[i];
            ans.push(sum);
        }
        return ans;
    }
    this.prefix = this.calculate(nums);
    this.getSum = function(left,right){
        if(left === 0){
            return this.prefix[right];
        }
        return this.prefix[right] - this.prefix[left-1];
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.getSum(left,right);
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
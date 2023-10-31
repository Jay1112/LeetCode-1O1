// House Robber

/*

You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed, the only constraint 
stopping you from robbing each of them is that adjacent houses have 
security systems connected and it will automatically contact the police 
if two adjacent houses were broken into on the same night.
Given an integer array nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police.

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

*/

class Solution {
public:
    int rob(vector<int>& nums) {
        int size = nums.size();
        if(size == 1){
            return nums[0] ;
        }
        vector<int> dp(size+1,0);
        dp[1] = nums[0] ; 
        for(int i = 2 ; i <= size; i++)
        {
            int include = dp[i-2] + nums[i-1] ;
            int exclude = dp[i-1] ; 

            dp[i] = max(include,exclude);
        }

        return dp[size];
    }
};
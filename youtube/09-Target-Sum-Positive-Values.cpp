// TC : O(n*sum)
// SC : O(n*sum)

class Solution {
public:

    int getSubsetSum(vector<int>& nums, int n,int target){
        vector<vector<int>> dp(n+1,vector<int>(target+1,0));

        for(int i = 0 ; i <= n; i++){
            dp[i][0] = 1 ;
        }

        for(int i = 1 ; i <= n; i++)
        {
            for(int j=1 ; j <= target; j++)
            {
                if(nums[i-1] <= j){
                    dp[i][j] = dp[i-1][j] + dp[i-1][j-nums[i-1]];
                }else{
                    dp[i][j] = dp[i-1][j];
                }
            }
        }

        return dp[n][target];
    }

    int findTargetSumWays(vector<int>& nums, int target) {
        int sum = 0 ; 
        for(auto it : nums){
            sum = sum + it ;
        }

        if((sum + target) % 2 != 0){
            return 0;
        }

        int main_target = (sum + target) / 2 ;

        int ans = getSubsetSum(nums,nums.size(),main_target);
        return ans;
    }
};
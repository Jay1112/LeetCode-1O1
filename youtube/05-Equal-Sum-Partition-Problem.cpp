// TC : O(n*sum)
// SC : O(n*sum)

class Solution {
    public:
        bool isSubsetSum(vector<int> nums, int n, int sum){
            int dp[n+1][sum+1] ;
    
            for(int j = 0 ; j <= sum ; j++ ){
                dp[0][j] = 0;
            } 
            for(int i = 0 ; i <= n ; i++ ){
                dp[i][0] = 1;
            } 
    
            for(int i = 1 ; i <= n ; i++ ){
                for(int j = 1 ; j <= sum ; j++){
                    if(nums[i-1] <= j){
                        dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i-1]];
                    }else{
                        dp[i][j] = dp[i-1][j];
                    }
                }
            }
    
            return dp[n][sum];
        }
    
        bool canPartition(vector<int>& nums) {
            int sum = 0 ;
            int length = nums.size() ; 
            for(int i = 0 ; i < length; i++){
                sum = sum + nums[i] ;
            }
    
            if((sum & 1) == 0){
                int expSum = sum / 2 ; 
                bool isFound = isSubsetSum(nums,length,expSum);
                return isFound;
            }
            return false;
        }
    };
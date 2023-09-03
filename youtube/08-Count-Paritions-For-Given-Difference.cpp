// TC : O(n*sum)
// SC : O(n*sum)

class Solution {
  public:
    int countPartitions(int n, int d, vector<int>& arr) {
        int sum = 0 ; 
        int mod = 1e9+7;
        for(int i = 0 ; i < arr.size(); i++){
            sum = (sum + arr[i])%mod ;
        }
        
        int target = (d + sum) / 2 ;
        
        if((d + sum) % 2 == 1 || sum < d){
            return 0;
        }
        
        vector<vector<int>> dp(n+1,vector<int>(sum+1,0));
        for(int j = 0 ; j <= sum ; j++){
            dp[0][j] = 0 ;
        }
        for(int i = 0 ; i <= n ; i++){
            dp[i][0] = 1 ;
        }
        
        for(int i = 1 ; i <= n ; i++)
        {
            for(int j = 0 ; j <= sum ; j++)
            {
                if(arr[i-1] <= j){
                    dp[i][j] = (dp[i-1][j] + dp[i-1][j - arr[i-1]])%mod;
                }else{
                    dp[i][j] = dp[i-1][j]%mod ;
                }
            }
        }
        return dp[n][target]%mod;
    }
};
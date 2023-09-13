// TC : O(N*N)
// SC : O(N*N)

class Solution{
  public:
    int cutRod(int price[], int n) {
        vector<int> length(n+1,0);
        int p = n;
        for(int i = 0 ; i <= n ; i++){
            length[i] = i ;
        }
        vector<vector<int>> dp(n+1,vector<int>(p+1,0));
        
        for(int i=1;i<=n;i++)
        {
            for(int j=1;j<=p;j++)
            {
                if(length[i] <= j){
                    dp[i][j] = max(price[i-1] + dp[i][j-length[i]], dp[i-1][j]);
                }else{ 
                    dp[i][j] = dp[i-1][j];
                }
            }
        }
        
        return dp[n][n];
    }
};
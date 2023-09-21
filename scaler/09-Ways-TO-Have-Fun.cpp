// TC : O(N)
// SC : O(N)

int Solution::solve(int A) {
    vector<vector<int>> dp(A+1,vector<int>(3,0));

    dp[1][0] = 1 ; 
    dp[1][1] = 1 ; 
    dp[1][2] = 1 ;

    int mod = 1000000007;

    for(int i = 2 ; i <= A; i++)
    {
        dp[i][0] = ((dp[i-1][0]%mod + dp[i-1][1]%mod)%mod + dp[i-1][2]%mod)%mod;
        dp[i][1] = (dp[i-1][0]%mod + dp[i-1][2]%mod)%mod ; 
        dp[i][2] = (dp[i-1][0]%mod + dp[i-1][1]%mod)%mod ;
        int temp = ((long long)dp[i-2][2]%mod * (long long)2 )%mod;
        dp[i][2] =( dp[i][2]%mod - temp%mod + mod)%mod;
    }

    int ans = (( dp[A][0]%mod + dp[A][1]%mod )%mod + dp[A][2]%mod)%mod;
    return ans;
}

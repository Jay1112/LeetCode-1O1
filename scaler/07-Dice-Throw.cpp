// TC : O(N)
// SC : O(N)

int Solution::solve(int A) {
    vector<long long> dp(A+1,0);
    long long mod = 1e9 + 7 ; 

    for(int i = 1 ; i <= A; i++)
    {
        long long sum = 0 ; 
        for(int j = 1 ; j <= 6 ; j++ )
        {
            if(i - j >= 0){
                sum = (sum%mod + dp[i-j]%mod)%mod ;
            }
        }
        if(i <= 6){
            sum = (sum + 1)%mod;
        }
        dp[i] = sum ;
    }

    return dp[A];

}

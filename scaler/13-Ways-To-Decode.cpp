// TC : O(N)
// SC : O(N)

int Solution::numDecodings(string A) {
    if(A.size() == 0){
        return 0 ;
    }

    vector<int> dp(A.size()+1,0);
    dp[0] = 1 ;

    int mod = 1e9 + 7 ;

    for(int i = 1 ; i <= A.size(); i++)
    {
        char ch = A[i-1] ;
        int prevCh = A[i-2] ;
        int count = 0;
        
        if(ch >= '1' && ch <= '9'){
            count = (count%mod + dp[i-1]%mod)%mod;
        }
        if(prevCh == '1' && ch >= '0' && ch <= '9'){
            count = (count%mod + dp[i-2]%mod)%mod;
        }
        else if(prevCh == '2' && ch >= '0' && ch <= '6'){
            count = (count%mod + dp[i-2]%mod)%mod;
        }

        dp[i] = count ; 
    } 

    return dp[A.size()];
}

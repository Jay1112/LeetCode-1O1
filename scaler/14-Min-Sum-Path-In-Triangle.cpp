// TC : O(N*N)
// SC : O(N*N)

int Solution::minimumTotal(vector<vector<int> > &A) {
    int rows = A.size() ; 

    if(rows == 0){
        return 0 ;
    }

    if(rows == 1){
        return A[0][0];
    }

    vector<vector<int>> dp(rows,vector<int>(rows,INT_MAX));

    dp[0][0] = A[0][0] ; 

    for(int i = 1 ; i < rows; i++ )
    {
        for(int j = 0 ; j <= i; j++)
        {
            int item = A[i][j] ; 

            if(j == 0){
                dp[i][j] = dp[i-1][j] + item;
            }else{
                dp[i][j] = min(dp[i-1][j],dp[i-1][j-1]) + item;
            }
        }
    }

    int mini = INT_MAX ; 
    for(int i = 0 ; i < rows; i++){
        mini = min(mini,dp[rows-1][i]);
    }

    return mini;
}

// TC : O(N*M)
// SC : O(N*M)

int Solution::minPathSum(vector<vector<int> > &A) {
    int rows = A.size() ; 
    int cols = A[0].size() ; 

    vector<vector<int>> dp(rows, vector<int>(cols,0)) ;

    dp[0][0] = A[0][0];

    for(int i = 1 ; i < rows ; i++){
        dp[i][0] = dp[i-1][0] + A[i][0];
    } 
    for(int i = 1 ; i < cols ; i++){
        dp[0][i] = dp[0][i-1] + A[0][i];
    } 

    for(int i = 1 ; i < rows; i++){
        for(int j = 1 ; j < cols ; j++){
            dp[i][j] = min(dp[i-1][j],dp[i][j-1]) + A[i][j];
        }
    }

    return dp[rows-1][cols-1];
}

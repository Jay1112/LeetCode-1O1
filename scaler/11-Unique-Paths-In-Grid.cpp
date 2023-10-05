// TC : O(n*m)
// SC : O(n*m)


int getUniquePaths(vector<vector<int> > A ){
	int rows = A.size() ;
	int cols = A[0].size() ;
	vector<vector<int>> dp(rows+1,vector<int>(cols+1,0));
	for(int i = 1 ; i <= rows; i++)
	{
		for(int j = 1 ; j <= cols; j++)
		{
			if(i == 1 && j == 1 && A[0][0] == 0){
				dp[1][1] = 1 ; 
			}else if(A[i-1][j-1] == 1){
				dp[i][j] = 0 ;
			}else {
				dp[i][j] = dp[i-1][j] + dp[i][j-1];
 			}
		}
	}

	return dp[rows][cols];
}

int Solution::uniquePathsWithObstacles(vector<vector<int> > &A) {

	int paths = getUniquePaths(A);

	return paths;
}

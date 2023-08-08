// TC : O(N*N)
// SC : O(N*N)

module.exports = { 
	minPathSum : function(A){
        let rows = A.length ; 
        let cols = A[0].length ; 

        let dp = new Array(rows).fill().map(()=>Array(cols).fill(0));

        for(let i = 0 ; i < rows; i++){
            for(let j = 0 ; j < cols ; j++){
                if(i == 0 && j == 0){
                    dp[i][j] = A[i][j] ;
                }else if(i == 0){
                    dp[i][j] = dp[i][j-1] + A[i][j] ;
                }else if(j == 0){
                     dp[i][j] = dp[i-1][j] + A[i][j] ;
                }
            }
        }

        for(let i = 1 ; i < rows ; i++){
            for(let j = 1 ; j < cols ; j++){
                dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + A[i][j];
            }
        }

        return dp[rows-1][cols-1];
	}
};

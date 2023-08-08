// TC : O(N*N)
// SC : O(N*N)

module.exports = { 

	isValid : function(rows,cols,r,c){
		if(r >= 0 && r < rows && c >= 0 && c < cols){
			return true;
		}
		return false;
	},

	uniquePathsWithObstacles : function(A){
		const rows = A.length ; 
		const cols = A[0].length ;

		if(A[0][0] === 1 || A[rows-1][cols-1] === 1){
			return 0;
		}

		let dp = new Array(rows).fill().map(()=>Array(cols).fill(0));

		dp[0][0] = 1 ; 

		for(let i = 0 ; i < rows; i++){
			for(let j = 0 ; j < cols; j++){

				if(i == 0 && j == 0){
					continue;
				}

				let ways = 0 ; 
				const upCell = this.isValid(rows,cols,i-1,j);
				const leftCell = this.isValid(rows,cols,i,j-1);

				if(upCell && A[i-1][j] === 0){
					ways = ways + dp[i-1][j] ; 
				}

				if(leftCell && A[i][j-1] === 0){
					ways = ways + dp[i][j-1] ; 
				}

				dp[i][j] = ways;
 			}
		}
		return dp[rows-1][cols-1];
	}
};

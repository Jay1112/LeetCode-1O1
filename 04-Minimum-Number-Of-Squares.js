// TC : O(N*sqrt(N))
// SC : O(N)

module.exports = { 
	countMinSquares : function(A){
		let dp = new Array(A+1).fill(0);

		dp[1] = 1 ; 

		for(let i = 2; i <= A; i++){
			dp[i] = i ; 
			for(let j = 1; j*j <= i; j++){
				dp[i] = Math.min(dp[i], dp[i - (j*j)] + 1 );
			}
		}
		return dp[A];
	}
};


// TC : O(n)
// SC : O(n)

module.exports = { 
	adjacent : function(A){
		let res = new Array(A[0].length).fill(0) ; 
		let dp  = new Array(A[0].length).fill(0) ; 
		for(let i = 0 ; i < A[0].length; i++){
			res[i] = Math.max(A[0][i],A[1][i]);
		}

		if(res.length === 1){
			return res[0] ;
		}

		dp[0] = Math.max(res[0]) ; 
		dp[1] = Math.max(res[0],res[1]);

		for(let i = 2 ; i < res.length ; i++){
			dp[i] = Math.max(dp[i-1],dp[i-2]+res[i]);
		}

		return dp[res.length - 1] ;
	}
};

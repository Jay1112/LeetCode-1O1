// TC : O(n)
// SC : O(n)

module.exports = { 
	solve : function(A){
		let dp = new Array(A+1).fill().map(()=>Array(3).fill(0));
		let mod = Math.pow(10,9) + 7 ;

		dp[1][0] = 1 ; 
		dp[1][1] = 1 ; 
		dp[1][2] = 1 ; 

		for(let i = 2; i <= A; i++){
			let cal = 0 ;
			cal = (dp[i-1][0]%mod + dp[i-1][1]%mod)%mod ;
			cal = (cal + dp[i-1][2]%mod)%mod ; 
			dp[i][0] = cal ;

			cal = 0 ;			
			cal = (dp[i-1][0]%mod + dp[i-1][2]%mod)%mod ;
			dp[i][1] = cal;

			cal = 0 ;
			cal = (dp[i-1][0]%mod + dp[i-1][1]%mod)%mod ;
			let mul = (2 * dp[i-2][2]%mod)%mod ;
			dp[i][2] = (cal%mod - mul%mod + mod)%mod  ;
		}

		const ans = ((dp[A][0]%mod + dp[A][1]%mod)%mod + dp[A][2]%mod)%mod ; 
		return ans;
	}
};

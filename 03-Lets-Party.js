// TC : O(n)
// SC : O(n)

module.exports = { 
	solve : function(A){
        let dp = new Array(A+1).fill(0) ; 

        dp[1] = 1 ; 
        dp[2] = 2 ;

        const mod = 10003 ;

        for(let i = 3 ; i <= A ; i++){
            const alone = dp[i-1] % mod ; 
            const pair  = (dp[i-2]%mod * (i - 1)%mod)%mod ;
            dp[i] = (alone + pair)%mod ;
        }

        return dp[A];
	}
};

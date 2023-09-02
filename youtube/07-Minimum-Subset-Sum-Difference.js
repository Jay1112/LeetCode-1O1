// TC : O(n*sum)
// SC : O(n*sum)

module.exports = { 
	solve : function(A){
        let sum = 0 ; 
        for(let i = 0 ; i < A.length; i++){
            sum = sum + A[i];
        }
        
        let dp = new Array(A.length + 1).fill(()=>Array(sum).fill(false));
        
        for(let j = 0 ; j <= sum ; j++){
            dp[0][j] = false;
        }
        
        for(let i = 0 ; i <= A.length; i++){
            dp[i][0] = true;
        }
        
        for(let i = 1 ; i <= A.length ; i++)
        {
            for(let j = 1 ; j <= sum ; j++)
            {
                if(A[i-1] <= j){
                    dp[i][j] = dp[i-1][j] || dp[i-1][j-A[i-1]];
                }else{
                    dp[i][j] = dp[i-1][j] ;
                }
            }
        }
        
        let min = sum ; 
        for(let j = 1 ; j <= sum ; j++)
        {
            if(dp[A.length][j] === true){
                const res = sum - 2*j ;
                if(res >= 0){
                    min = Math.min(min,res); 
                }
            }
        }
        
        return min;
	}
};

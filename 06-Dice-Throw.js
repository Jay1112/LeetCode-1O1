// TC : O(N)
// SC : O(N)

module.exports = { 
       solve : function(A){
           let dp = new Array(A+1).fill(0);
           dp[0] = 1 ;
           let mod = Math.pow(10,9) + 7;
           for(let i = 1 ; i <= A; i++){
               dp[i] = 0 ; 
               for(let j = 1 ; j <= 6; j++){
                   if(j <= i){
                       dp[i] = (dp[i] + dp[i-j]%mod)%mod ;
                   }
                }
           }
   
           return dp[A];
   
       }
   };
   
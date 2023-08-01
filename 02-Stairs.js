// TC : O(n)
// SC : O(n)

module.exports = { 
       climbStairs : function(A){
           let dp = new Array(A+1).fill(0);
   
           dp[1] = 1 ; 
           dp[2] = 2 ; 
   
           let rem = Math.pow(10,9) + 7 ; 
   
           for(let i = 3 ; i <= A; i++){
               dp[i] = (dp[i-1]%rem + dp[i-2]%rem)%rem;
           }
   
           return dp[A];
       }
   };
   
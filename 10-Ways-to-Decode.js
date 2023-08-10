// TC : O(n)
// SC : O(n)

module.exports = { 
    //param A : string
    //return an integer
       numDecodings : function(A){
           let dp = new Array(A.length+1).fill(0);
           let mod = Math.pow(10,9) + 7 ;
           dp[0] = 1 ; 
           for(let i = 1 ; i <= A.length ; i++){
               if(A[i-1] >= '1' && A[i-1] <= '9'){
                   dp[i] = dp[i-1]%mod ;
               }
               if(A[i-2] === '1' && A[i-1] >= '0' && A[i-1] <= '9'){
                   dp[i] = (dp[i] + dp[i-2]%mod)%mod;
               }
               else if(A[i-2] === '2' && A[i-1] >= '0' && A[i-1] <= '6'){
                   dp[i] = (dp[i] + dp[i-2]%mod)%mod;
               }
           }
           return dp[A.length] ;
       }
   };
   
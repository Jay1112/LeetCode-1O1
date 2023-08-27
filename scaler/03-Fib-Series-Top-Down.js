// TC : O(N)
// SC : O(N)

function fib(n){
    let dp = new Array(n+1).fill(-1);

    dp[0] = 0 ; 
    dp[1] = 1 ; 

    for(let i = 2 ; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n];
}

const n = 4 ; 
const ans = fib(4);
console.log("Top-Down : ",ans);
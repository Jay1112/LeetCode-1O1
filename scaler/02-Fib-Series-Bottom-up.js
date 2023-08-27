function fib(n){
    if(n <= 1){
        return n;
    }

    if(dp[n] !== -1){
        return dp[n] ;
    }

    dp[n] = fib(n-1) + fib(n-2);

    return dp[n];
}

const n = 4 ; 
let dp = new Array(n+1).fill(-1);
const ans = fib(4);
console.log("Bottom-Up : ",ans);
/*

wt  : weight Array [Array]
val : value  Array [Array]
cap : capacity of Knapsack [number]
n   : total no.of items    [number]     

output : Make Maximum Profit

*/

const val   =  [60,100,120] ;
const wt    =  [10,20,30] ;
const cap   =  50 ;
const n     =  3 ; 

let dp = new Array(n+1).fill().map(()=>Array(cap+1).fill(-1));

function findMaxProfit(wt,val,cap,n){
    if(cap === 0 ||  n === 0){
        return 0;
    }

    if(dp[n][cap] !== -1){
        return dp[n][cap];
    }

    if(wt[n-1] <= cap){
        return dp[n][cap] = Math.max(val[n-1] + findMaxProfit(wt,val,cap-wt[n-1],n-1),findMaxProfit(wt,val,cap,n-1));
    }else{
        return dp[n][cap] = findMaxProfit(wt,val,cap,n-1);
    }
}

let t1 = new Date().getTime();
console.log(t1);
const max_profit = findMaxProfit(wt,val,cap,n);
let t2 = new Date().getTime();
console.log(t2);
console.log("Max-Profit : ", max_profit);
console.log("Time Taken : ", t2-t1 ,"ms");
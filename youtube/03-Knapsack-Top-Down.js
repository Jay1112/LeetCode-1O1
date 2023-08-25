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

function findMaxProfit(wt,val,cap,n){

    let dp = new Array(n+1).fill().map(()=>Array(cap+1).fill(-1));

    // initialization 
    for(let i = 0 ; i <= n ; i++){
        for(let j = 0 ; j <= cap; j++){
            if(i === 0 || j === 0){
                dp[i][j] = 0 ;
            }
        }
    }

    // calculate the result
    for(let i = 1 ; i <= n ; i++)
    {
        for(let j = 1 ; j <= cap; j++)
        {
            // include the item 
            if(wt[i-1] <= j){
                const include_item = val[i-1] + dp[i-1][j-wt[i-1]];
                const exclude_item = dp[i-1][j];
                dp[i][j] = Math.max(include_item,exclude_item);
            }else{
                // exclude the item
                dp[i][j] = dp[i-1][j];
            }
        }
    }

    return dp[n][cap];
    
}

const max_profit = findMaxProfit(wt,val,cap,n);
console.log("Max-Profit : ", max_profit);
/*

wt  : weight Array [Array]
val : value  Array [Array]
cap : capacity of Knapsack [number]
n   : total no.of items    [number]     

output : Make Maximum Profit

*/
function findMaxProfit(wt,val,cap,n){
    // base condition
    if(cap === 0 || n === 0){
        return 0;
    }

    // choice diagram
    if(wt[n-1] <= cap){
        // include the item in bucket
        const include_item = val[n-1] + findMaxProfit(wt,val,cap-wt[n-1],n-1);
        // exlcude the item 
        const exclude_item = findMaxProfit(wt,val,cap,n-1);
        const ans = Math.max(include_item,exclude_item);
        return ans;
    }else{
        // exlcude the item because weight is out of bound.
        const exclude_item = findMaxProfit(wt,val,cap,n-1);
        return exclude_item;
    }
}

const val   =  [60,100,120] ;
const wt    =  [10,20,30] ;
const cap   =  50 ;
const n     =  3 ; 

let t1 = new Date().getTime();
console.log(t1);
const max_profit = findMaxProfit(wt,val,cap,n);
let t2 = new Date().getTime();
console.log(t2);
console.log("Max-Profit : ", max_profit);
console.log("Time Taken : ", t2-t1 ,"ms");
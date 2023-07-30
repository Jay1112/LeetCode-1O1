// TC : O(n)
// SC : O(1)

var maxProfit = function(prices) {
    let max_profit = 0 ; 
    let min_price = Math.pow(10,5) + 1 ; 

    for(let i = 0 ; i < prices.length ; i++){
        min_price = Math.min(min_price,prices[i]);

        let profit = prices[i] - min_price ; 
        max_profit = Math.max(profit,max_profit);
    }

    return max_profit;
};
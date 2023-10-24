/*
    You are climbing a staircase. It takes n steps to reach the top.
    Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

// TC : O(n)
// SC : O(n) [DP Array]

class Solution {
public:
    int getTotalWays(int n){
        vector<int> dp(n+1,-1);
        dp[0] = 1 ;
        dp[1] = 1 ; 

        for(int i = 2 ; i <=n ; i++){
            dp[i] = dp[i-1] + dp[i-2] ;
        }

        return dp[n];
    }

    int climbStairs(int n) {
        int ans = getTotalWays(n);
        return ans;
    }
};
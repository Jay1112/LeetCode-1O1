// Frog Jump

// TC : O(N)
// SC : O(N)

/*
2
4
10 20 30 10
3
10 50 10
*/

#include <bits/stdc++.h> 
int frogJump(int n, vector<int> &heights)
{
    if(n <= 1){
        return heights[n-1];
    }
    vector<int> dp(n+1,0);
    dp[1] = 0 ; 
    dp[2] = abs(heights[1] - heights[0]) ;

    for(int i = 3 ; i <= n; i++)
    {
        int fromLast    = dp[i-1] + abs(heights[i-1] - heights[i-2]);
        int from2ndLast = dp[i-2] + abs(heights[i-1] - heights[i-3]);

        dp[i] = min(fromLast,from2ndLast);
    }

    return dp[n];
}
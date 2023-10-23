// FIBNACCI-SERIES : Memoization

// TC : O(N)
// SC : O(N) [stack-calls] + O(N) [DP Array]

#include <bits/stdc++.h>

using namespace std;

int calculateDP(int n,vector<int>& dp){
  if(n <= 1){
    return n; 
  }
  
  if(dp[n] != -1){
    return dp[n];
  }

  dp[n] = calculateDP(n-1,dp) + calculateDP(n-2,dp) ;

  return dp[n];
}

int main() {
  int n = 5 ; 
  vector<int> dp(n+1,-1); 

  int ans = calculateDP(n,dp);

  cout << ans << endl;

  return 0 ;
}
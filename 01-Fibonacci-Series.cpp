// TC : O(n)
// SC : O(n)

#include<bits/stdc++.h>

using namespace std;

int getFibNumber(vector<int>& dp,int n){
    if(n <= 1){
        return n ;
    }

    if(dp[n] != -1){
        return dp[n];
    }

    int ans = getFibNumber(dp,n-1) + getFibNumber(dp,n-2);

    dp[n] = ans ;

    return dp[n];
}

int main()  {

    int n ; cin >> n ; 

    vector<int> dp(n+1,-1);

    dp[0] = 0 ; 
    dp[1] = 1 ; 

    int ans = getFibNumber(dp,n);

    cout << ans << endl;
    
    return 0;
}
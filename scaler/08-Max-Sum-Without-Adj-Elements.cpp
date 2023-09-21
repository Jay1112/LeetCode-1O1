// TC : O(N)
// SC : O(N)

int getMaxSum(vector<int> arr){
    if(arr.size() == 1){
        return arr[0];
    }
    vector<int> dp(arr.size(),0);

    dp[0] = arr[0] ; 
    dp[1] = max(arr[0],arr[1]) ;

    for(int i = 2 ; i < arr.size(); i++)
    {
        dp[i] = max(dp[i-1],dp[i-2]+arr[i]);
    }

    return dp[arr.size()-1];
}

int Solution::adjacent(vector<vector<int> > &A) {
    vector<int> arr( A[0].size(),0);

    for(int i = 0 ; i < A[0].size(); i++)
    {
        arr[i] = max(A[0][i],A[1][i]);
    }

    int ans = getMaxSum(arr);

    return ans;
}

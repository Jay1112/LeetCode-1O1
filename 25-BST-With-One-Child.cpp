// TC : O(N)
// SC : O(1)

string Solution::solve(vector<int> &A) {
    int mini = INT_MIN , maxi = INT_MAX ; 
    for(int i = 1 ; i < A.size(); i++){
        if(A[i-1] <= A[i]){
            mini = A[i-1] + 1;
        }else{
            maxi = A[i-1] - 1 ; 
        }

        if(mini > A[i] || A[i] > maxi){
            return "NO";
        }
    }

    return "YES";
}

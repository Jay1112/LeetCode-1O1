// TC : O(N)
// SC : O(H)

vector<int> getBSTNodes(TreeNode* A){
    if(A == nullptr){
        return {INT_MAX,INT_MIN,0};
    }
    if(A->left == nullptr && A->right == nullptr){
        return {A->val,A->val,1};
    }

    vector<int> left = getBSTNodes(A->left);
    vector<int> right = getBSTNodes(A->right);

    if( left[1] < A->val && A->val < right[0]){
        vector<int> res(3,0) ; 

        res[0] = min(left[0],min(right[0],A->val));
        res[1] = max(left[1],max(right[1],A->val));

        res[2] = 1 + left[2] + right[2] ;

        return res;
    }

    vector<int> res(3,0) ; 

    res[0] = INT_MIN;
    res[1] = INT_MAX;

    res[2] = max(left[2],right[2]);

    return res;
}

int Solution::solve(TreeNode* A) {
    vector<int> res = getBSTNodes(A);
    return res[2];
}

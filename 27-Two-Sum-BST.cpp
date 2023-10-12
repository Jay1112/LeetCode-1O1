// TC : O(n)
// SC : O(n + H)

bool getSum(TreeNode* A,int B,unordered_map<int,int> &m){
    if(A == nullptr){
        return false ;
    }

    int target = B - (A->val) ;

    if(m[target]){
        return true;
    }else{
        m[A->val] = 1;
    }

    bool leftSum = getSum(A->left,B,m);
    bool rightSum = getSum(A->right,B,m);

    return leftSum || rightSum ;
}

int Solution::t2Sum(TreeNode* A, int B) {
    unordered_map<int,int> m ;
    int isFound = getSum(A,B,m);
    return isFound;
}

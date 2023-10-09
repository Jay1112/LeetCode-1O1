// TC : O(n)
// SC : O(H)

TreeNode* getTree(const vector<int> &A,int low,int high){
    if(low <= high){
        int mid = (low + high) / 2;

        TreeNode* node = new TreeNode(A[mid]);

        node->left = getTree(A,low,mid-1);
        node->right = getTree(A,mid+1,high);

        return node;
    }
    return nullptr;
}

TreeNode* Solution::sortedArrayToBST(const vector<int> &A) {
    TreeNode* root = getTree(A,0,A.size()-1);
    return root;
}
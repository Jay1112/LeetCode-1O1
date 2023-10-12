// BST in Range

// TC : O(n)
// SC : O(H)

void updateCount(TreeNode* node,int B,int C,int& count){
    if(node == nullptr){
        return ;
    }

    if(B <= node->val && node->val <= C){
        count++;
    }

    updateCount(node->left,B,C,count);
    updateCount(node->right,B,C,count);
}

int Solution::solve(TreeNode* A, int B, int C) {
    int count = 0 ; 
    updateCount(A,B,C,count);
    return count ;
}

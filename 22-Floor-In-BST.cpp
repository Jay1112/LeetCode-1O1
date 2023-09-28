// TC : O(Log(N))
// SC : O(1)

int Floor(BinaryTreeNode<int> *node, int input)
{
    if(node == nullptr){
        return -1;
    }

    int value = INT_MAX ; 

    while(node != nullptr){
        if(node->data == input){
            return node->data ;
        }else if(node->data > input){
            node = node->left ;
        }else {
            value = node->data ;
            node = node->right ;
        }
    }

    return value;
    
}

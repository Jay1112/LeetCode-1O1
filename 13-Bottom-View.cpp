// TC : O(n)
// SC : O(n)

class Solution {
  public:
    vector <int> bottomView(Node *root) {
        vector<int> ans ; 
        if(root == nullptr){
            return ans ;
        }
        queue<pair<Node*,int>> q ;
        q.push({ root, 0 });
        
        map<int,int> m ;
        
        while(!q.empty())
        {
            int size = q.size();
            while(size--)
            {
                Node* node = q.front().first ; 
                int level = q.front().second ;
                q.pop();
                
                if(node->left){
                    q.push({ node->left, level - 1  });
                }
                if(node->right){
                    q.push({ node->right, level + 1  });
                }
                m[level] = node->data;
                
            }
        }
        
        for(auto item : m)
        {
            ans.push_back(item.second);
        }
        return ans;
    }
};
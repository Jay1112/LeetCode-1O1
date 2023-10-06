// TC : O(N*log(N))
// SC : O(N)

class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int,int> m ;
        priority_queue<pair<int,int>> pq ;
        vector<int> ans;

        for(int i = 0 ; i < nums.size(); i++){
            if(m.find(nums[i]) != m.end()){
                m[nums[i]] = m[nums[i]] + 1;
            }else{
                m[nums[i]] = 1 ;
            }
        } 

        for(auto it : m){
            pq.push({ it.second,it.first });
        }

        for(int i = 1 ; i <= k ; i++){
            pair<int,int> p = pq.top() ; 
            pq.pop();
            ans.push_back(p.second);
        }

        return ans;
    }
};
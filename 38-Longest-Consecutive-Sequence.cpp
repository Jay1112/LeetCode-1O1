// TC : O(n)
// SC : O(n)

class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        if(nums.size() == 0 ){
            return 0;
        }
        vector<int> arr ; 
        unordered_map<int,int> m ; 
        for(auto it : nums){
            if(!m[it]){
                m[it] = 1 ; 
                arr.push_back(it);
            }
        }

        int max_count = 1 ; 

        for(int i = 0 ; i < arr.size(); i++){
            int item = arr[i] ; 
            // visited
            if(m[item] == -1){
                continue ;
            }else{
                if(!m[item-1]){
                    int count = 0 ; 
                    while(m[item]){
                        m[item] = -1 ;
                        item++;
                        count++;
                    }
                    max_count = max(max_count,count);
                }
            }
        }

        return max_count ; 
    }
};
// TC : O(n)
// SC : O(1)

class Solution {
public:
    void sortColors(vector<int>& nums) {
        int low = 0 , high = nums.size() - 1 ; 
        int mid = 0 ; 

        while(mid <= high){
            int item = nums[mid] ; 

            switch(item){
                case 0 : swap(nums[low++],nums[mid++]); break; 
                case 1 : mid++; break;
                case 2 : swap(nums[mid],nums[high--]); break;
            }
        }
    }
};
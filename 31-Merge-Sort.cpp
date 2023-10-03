// Merge Sort 

// TC : O(n*log(n))
// SC : O(n)

class Solution {
public:

    void merge(vector<int>& nums,int low,int mid,int high){
        vector<int> temp ; 

        int i = low , j = mid + 1;
        int l1 = mid - low + 1;
        int l2 = high - mid ;

        while(i < l1 + low && j < mid + 1 + l2)
        {
            if(nums[i] <= nums[j]){
                temp.push_back(nums[i]); i++;
            }else{
                temp.push_back(nums[j]); j++;
            }
        } 

        while(i < l1 + low){
            temp.push_back(nums[i]); i++;
        }

        while(j < mid + 1 + l2){
            temp.push_back(nums[j]); j++;
        }

        for(int i = 0 ; i < temp.size(); i++){
            nums[i + low] = temp[i];
        }
    }

    void MergeSort(vector<int>& nums,int low,int high){
        if(low < high){
            int mid = (low + high) / 2 ;

            MergeSort(nums,low,mid);
            MergeSort(nums,mid+1,high);

            merge(nums,low,mid,high);
         }
    }

    vector<int> sortArray(vector<int>& nums) {
        MergeSort(nums,0,nums.size()-1);
        return nums;
    }
};
// TC : O(n*log(n))
// SC : O(N)

// Best Case    : O(n*logn)
// Avg Case     : O(n*logn)
// Worst Case   : O(n*n)

class Solution {
public:

    int getPivotIndex(vector<int>& nums,int low, int high){
        int item = nums[high] ;

        int i = low - 1, j = low ; 

        while(j <= high - 1 ){
            if(nums[j] < item){
                i++;
                swap(nums[i],nums[j]);
            }
            j++;
        }

        swap(nums[i+1],nums[high]);

        return i + 1;
    }

    void QuickSort(vector<int>& nums,int low,int high){
        if(low < high){
            int pivot = getPivotIndex(nums,low,high);
            
            QuickSort(nums,low,pivot-1);
            QuickSort(nums,pivot+1,high);
        }
    }

    vector<int> sortArray(vector<int>& nums) {
        QuickSort(nums,0,nums.size()-1);
        return nums;
    }
};
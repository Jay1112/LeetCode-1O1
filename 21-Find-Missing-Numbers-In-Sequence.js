// TC : O(n)
// SC : O(1)

var findDisappearedNumbers = function(nums) {
    let i = 0 ; 
    while(i < nums.length){
        if(nums[i] !== i+1){
            if(nums[nums[i]-1] === nums[i]){
                i++;
                continue;
            }
            let temp = nums[i];
            nums[i] = nums[nums[i] - 1 ];
            nums[temp-1] = temp ;
        }else{
            i++;
        }
    }
    let ans = [];
    for(let i = 0 ; i < nums.length; i++){
        if(nums[i] !== i+1){
            ans.push(i+1);
        }
    }
    return ans;
};
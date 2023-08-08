// TC : O(N)
// SC : O(1)

var removeElement = function(nums, val) {
    let i = 0 ;
    let j = nums.length - 1 ; 
    let counter = 0 ;

    for(let i = 0 ; i < nums.length; i++){
        if(nums[i] === val){
            counter = counter + 1;
        }
    }

    while(i <= j){
        if(nums[i] === val && nums[j] === val){
            j--;
        }else if(nums[i] !== val && nums[j] !== val){
            i++;
        }else if(nums[i] !== val && nums[j] === val){
            j--;
        }else{
            let temp = nums[i] ; 
            nums[i] = nums[j] ;
            nums[j] = temp ;

            i++; j--;
        }
    }

    return nums.length - counter ;
};
// TC : O(n)
// SC : O(1)

var productExceptSelf = function(nums) {
    let mul = 1 ; 
    let zeroCounter = 0;
    for(let i = 0 ; i < nums.length; i++){
        if(nums[i] === 0){
            zeroCounter++;
        }
        if(nums[i] !== 0){
             mul = mul * nums[i] ;
        }
    }

    if(zeroCounter >= 2){
        const arr = new Array(nums.length).fill(0);
        return arr ; 
    }

    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] === 0){
            nums[i] = mul;
        }else{
            if(zeroCounter){
                nums[i] = 0 ; 
            }else{
                nums[i] = mul / nums[i] ;
            }
        }
    }

    return nums;
};
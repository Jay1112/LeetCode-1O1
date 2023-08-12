// TC : O(N)
// SC : O(1)

var majorityElement = function(nums) {
    let maj = null ; 
    let counter = 0 ; 

    for(let i = 0 ; i < nums.length ; i++){
        if(maj === null){
            maj = nums[i] ; 
            counter = 1;
        }else{
            if(maj === nums[i]){
                counter++;
            }else{
                counter--;
                if(counter === 0){
                    maj = null ;
                    counter = 0 ;
                }
            }
        }
    }

    return maj ;
};
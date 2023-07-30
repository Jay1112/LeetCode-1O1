// TC : O(n)
// SC : O(n)

var twoSum = function(nums, target) {
    let track = new Map() ; 

    let ind1 = -1 ; 
    let ind2 = -1 ;

    for(let i = 0 ; i < nums.length ; i++){
        let val = target - nums[i] ; 

        if(track.has(val)){
            ind1 = track.get(val) ; 
            ind2 = i ;
            break;
        }else{
            track.set(nums[i],i);
        }
    }

    return [ind1,ind2];
};
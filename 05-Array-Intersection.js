/*
    Given two integer arrays nums1 and nums2, return an array of their intersection. 
    Each element in the result must be unique and you may return the result in any order.
*/

// TC : O(m+n)
// SC : O(m+n)

// Unsorted Array
var intersection = function(nums1, nums2) {
    let map = new Map();
    for(let item of nums1){
        const ch = map.get(item);
        if(!ch){
            map.set(item,1);
        }
    }
    let answer = [];
    let track = new Map();
    for(let item of nums2){
        if(map.get(item) && !track.get(item)){
            answer.push(item);
            track.set(item,1);
        }
    }
    return answer;
};


// TC : O(m+n)
// SC : O(m+n)

// Sorted Array
var intersection = function(nums1, nums2) {
    let inter = []; 
    let i = 0 , j = 0 ; 

    while(i < nums1.length && j < nums2.length){
        if(nums1[i] === nums2[j]){
            if(inter.length === 0 || inter[inter.length-1] !== nums1[i] ){
                inter.push(nums1[i]);
            }
            i++;
            j++;
        }else if(nums1[i] < nums2[j]){
            i++;
        }else{
            j++;
        }
    }

    return inter;
};
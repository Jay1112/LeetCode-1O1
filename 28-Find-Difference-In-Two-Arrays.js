// TC : O(n + m)
// SC : O(n + m)

var findDifference = function(nums1, nums2) {
    let map1 = new Map();
    let map2 = new Map();

    for(let i = 0 ; i < nums1.length; i++){
      if(!map1.get(nums1[i])){
        map1.set(nums1[i],1);
      }else{
        map1.set(nums1[i],map1.get(nums1[i]) + 1);
      }
    }

    for(let i = 0 ; i < nums2.length; i++){
      if(!map2.get(nums2[i])){
        map2.set(nums2[i],1);
      }else{
        map2.set(nums2[i],map2.get(nums2[i]) + 1);
      }
    }

    let ans = [];

    let first = [];
    for(let i = 0 ; i < nums1.length; i++){
      const count1 = map1.get(nums1[i]);
      const count2 = map2.get(nums1[i]);
      if(count1 > 0 && !count2){
        first.push(nums1[i]);
        map1.set(nums1[i],0);
      }
    }

    ans.push(first);

    first = [];
    for(let i = 0 ; i < nums2.length; i++){
      const count1 = map1.get(nums2[i]);
      const count2 = map2.get(nums2[i]);
      if(!count1 && count2 > 0){
        first.push(nums2[i]);
        map2.set(nums2[i],0);
      }
    }

    ans.push(first);

    return ans;
};
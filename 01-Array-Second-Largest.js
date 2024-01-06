// Second Largest Element in Array

// TC : O(N)
// SC : O(1)

class Solution{
    print2largest(arr,n){
        let first = -Infinity ; 
        let second = -Infinity ;
        
        for(const item of arr){
            if(first < item){
                second = first ; 
                first = item ;
            }else if(first === item){
                continue;
            }else{
                if(second <= item){
                    second = item;
                }
            }
        }
        
        return second !== -Infinity ? second : -1;
    }
}
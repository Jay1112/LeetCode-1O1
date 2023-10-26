// Given an array Arr of size N, print second largest distinct element from an array.

// Input: 
// N = 6
// Arr[] = {12, 35, 1, 10, 34, 1}
// Output: 34
// Explanation: The largest element of the 
// array is 35 and the second largest element
// is 34.


// TC : O(n)
// SC : O(1)

class Solution{
    print2largest(arr,n){
        if(n <= 1){
            return -1 ;
        }
        
        let first   = -1;
        let second  = -1;
        
        for(let i = 0 ; i < n; i++)
        {
            let item = arr[i] ; 
            
            if(first < item){
                second = first ; 
                first = item ; 
            }else if(second < item && item != first){
                second = item ;
            }
        }
        
        return second ; 
    }
}
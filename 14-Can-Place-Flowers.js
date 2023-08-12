// TC : O(n)
// SC : O(1)

var canPlaceFlowers = function(arr, n) {
    let i = 0 ;
    const len = arr.length ;
    if(n === 0 ){
        return true;
    }
    if(len === 1 && arr[i] === 0){
        n--;
        i++;
    }
    while(i < len && n > 0)
    {
        if(arr[i] === 0){
            if(i === 0 && i + 1 < len && arr[i+1] === 0){
                arr[i] = 1 ;
                n--; 
            }
            else if(i === len - 1 && i - 1 >= 0 && arr[i-1] === 0){
                arr[i] = 1 ; 
                n--;
            }
            else if(arr[i-1] === 0 && arr[i+1] === 0){
                n--;
                arr[i] = 1;
            }
        }
        i++;
    }
    return n === 0 ? true : false;
};
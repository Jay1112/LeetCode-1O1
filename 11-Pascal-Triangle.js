// TC : O(N*N)
// SC : O(N*N)

var generate = function(rows) {
    let arr = [] ; 
    for(let i = 0 ; i < rows; i++){
        let sub_arr = [];
        for(let j = 0 ; j <= i ; j++){
            if(j == 0){
                sub_arr.push(1);
            }else{
                const val = (sub_arr[j-1] * (i + 1 - j)) / j; 
                sub_arr.push(val);
            }
        }
        arr.push(sub_arr);
    }
    return arr;
};
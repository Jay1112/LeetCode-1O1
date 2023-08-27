function fib(n){
    if(n <= 1){
        return n;
    }

    return fib(n-1) + fib(n-2);
}

const n = 4 ; 
const ans = fib(4);
console.log(ans);
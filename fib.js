let fib=[1,2];

let even_sum=0;
for(let i=2;i<50;i++){
    if(fib[i-1]+fib[i-2] > 4000000){

        break;
    }
    else{
        fib[i]=fib[i-1]+fib[i-2];
        if(fib[i]%2 == 0){
            even_sum+=fib[i];
        }
    }
}

console.log(fib);
console.log(even_sum+2);

// let even = fib.filter(elem=>elem%2==0);

// console.log(even);
// let ans = even.reduce((prev,curr)=>prev+curr);

// console.log(ans);
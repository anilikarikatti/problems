let arr = []

for(let i=1;i<1000;i++){
    if(i%3 == 0 || i % 5 == 0){
        arr.push(i);
    }
}

let ans = arr.reduce((prev,curr)=>{return prev+curr},0);

console.log(arr);
console.log(ans);
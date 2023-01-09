let arr = [];
let sum =0;
for(let i =2;i<2000000;i++){
    let flag = true;
    for(let j =2 ; j<=i/2; j++){
        if(i % j == 0){
            flag = false;
            break
        }
    }

    if(flag){
       
        sum+=i
        arr.push(i);
    }
}



console.log(arr);
console.log(sum);
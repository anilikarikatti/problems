let arr = []
for(let num =10  ;num <=100000000;num++){
let flag = true;

    for(let j = 1 ; j<=20;j+=2){
    
        if(num % j != 0){
            flag = false
        }


    }

    if(flag){
        arr.push(num)
    }

}

console.log(arr);
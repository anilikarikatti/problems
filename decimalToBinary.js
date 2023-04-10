

let a =10;

let res = '';
/*
while(a>=1){
    if(a == 1){
        res+=1;
        break
    }
    console.log(a);
    let rem =a%2;
    res+=rem;
    
    
    a = Math.floor(a/2)

}
*/


// for loop


for(a; a>=1 ;){
    if(a >1){
        let rem = a % 2;
        a = Math.floor(a/2);
        res += rem;
    }
    else{
        rem = 1;
        res+=rem;
        break
    }
}


res = Array.from(res).reverse().join('');


console.log(res);

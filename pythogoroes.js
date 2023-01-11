// a > b >c =1000


for(let a=1;a<500;a++){
    for(let b =a+1;b<500;b++){
        for(let c =b+1;c<500;c++){
            if(a+b+c == 1000){
                console.log(a,b,c)
                
            }
        }
    }
}


// for(let a =1 ;a<100000000000;a++){
//     let b = a+1;
//     let c = b+1;

//     if(a + b +c ==1000){
//         console.log(a,b,c);
//     }
// }
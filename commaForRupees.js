/*
let amount = '100000000000000000000000000000000000';

function numberToRupee(num){
    let a,b;
    if(num.length > 3){
         a = num.slice(0,num.length-3);
         b = num.slice(num.length-3)
        console.log(b);
        console.log(a);
    }
    
    function rec(leftPart){
        if(leftPart.length <= 2){
            console.log(leftPart);
            return leftPart+','
        }
        return rec(leftPart.slice(0,leftPart.length-2))+ leftPart.slice(leftPart.length-2,leftPart.length)+','; 
    }

    console.log(rec(a)+b);
}


function factorial(a){
    if(a == 1)
        return a;
    return a*factorial(a-1);
}
async function main(){
     let ans =factorial(100);
    console.log(ans);

      numberToRupee(amount)
}
main()
*/

// function rec(n){
//     if(n ==1 ){
//         return 1
//     }
//     console.log(n);
//     return n * rec(n-1);
// }
// console.log(rec(5));



function p(){
    return new Promise((resolve, reject) => {
            setTimeout(()=>{resolve("hello world")},3000)      
    })
    // console.log("hello world");
}

function q(){
    console.log("hello js");
}

function r(){
    for(let i=0 ;i <10000 ; i++){
        console.log(i);
    }
}

async function m(){ 

   r()
   q()

}
m()

// setTimeout(r,3000);
// setTimeout(q,1000)

// r()
// q()

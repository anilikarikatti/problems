let num1 = '99';

let num2 = '998765';

before_zeros = num1.length + num2.length;

num2 = num2.split('').reverse();

let tot=0;
let zero='';let ans=0;

for(let j of num2){
    ans=0;
    ans = num1 * j;
    ans+=zero;
    if(ans.length < before_zeros){
        for(let i=ans.length;i<before_zeros;i++){
                ans = ' '+ans;
        }
    }
    // console.log(j);
    // console.log(zero);
    console.log(ans);
    
    tot+=Number(ans);
    zero+='0'
}

console.log(tot);


let num = 7;
console.log(num);

let ans ='';
while(num > 0){
    let rem = num % 2;
    // console.log(num);
    ans = rem + ans;
    num = Math.floor(num/2);
}
console.log(ans);



// binary to decimal

let binary_number = ans;

binary_number= binary_number.split('').reverse();

let sum =0;
let index =0;
for(let num of binary_number){
    let pow = 2 ** index;
    // console.log(num);
    // console.log(pow);
    let cal = pow * num;
    sum+=cal;
    index+=1;
}
console.log(sum);
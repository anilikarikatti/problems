
let n =8;


let numbers = [10,98,3,33,12,22,21,11];

let even = numbers.filter(elem=>elem%2==0);


let odd = numbers.filter(elem=>elem%2!=0);

let ans = even.concat(odd);

console.log(ans);
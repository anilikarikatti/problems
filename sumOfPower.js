
let num = 2 ** 60;

console.log(num);

const powerOfSum = (num)=>{
    let ans = num.toString().split('');
    // console.log(ans);
    let sum = ans.reduce((pre,cur)=>pre+Number(cur),0)

    // console.log(sum);

    return sum;
}

let data = powerOfSum(num)

console.log(data);
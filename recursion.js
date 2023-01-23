
let sum = 0;
for(let num=0;num<=100;num++){
    sum+=num;
}

console.log(sum);



// recursion 

function sumOfNaturalNumbers(limit){
    if(limit == 0)
        return 0;
    if (limit == 1 )
        return 1;


    return limit + sumOfNaturalNumbers(limit -1);
}


let ans = sumOfNaturalNumbers(100);

console.log(ans);





// fibbionacci 

console.log("fibbionacci");
let fib = [0,1];


for(let i = 2;i<10;i++){
    fib.push(fib[i-1] + fib[i-2])    
}

console.log(fib);


// reccursion using fib


function fibb(a,b,limit){
    
    let c = a+b
    if(limit == 2)
        return ;
    
    console.log(c);

    a = b ;
    b =c;
    fibb(a,b,limit-1);



    
}


fibb(0,1,10)



// prime numbers 

console.log("prime numbers");

for(let i = 1 ; i< 100;i++){
    let flag = 1;
    for(let j=2;j<= i/2;j++){
        if(i % j ==0){
            flag = 0;
            break;
        }

    }
    if(flag == 1){
        console.log(i + " is prime");
    }
}


function prime(num){
    
    for(let i =2;i<=num/2;i++){
        if(num % i == 0){
            return "notprime";
        }
    }

    return "prime"
    

}

console.log(prime(9));



console.log("\n\n palindrome");


let str = "hrlksdflg";

function palindrome(str){
    str = String(str)
    let rev = str.split('').reverse().join('')
    if(rev == str){
        return "palindrome"
    }

    return "not Palindrome"
}

console.log(palindrome(str));



console.log("-----------armstong--------------");


function armstrong(num){
    num = String(num)
    let sum = 0
    for(let a of num){
        

        sum += a **3 ;
    }
    console.log(sum ,num);
    if(sum == num)
        return num + " " + "is armstrong"
    
    return num + "  " + "is not armstrong"

}
console.log(armstrong(153));


console.log("------------factorrial---------------");

function fact(num){
    console.log(num);
    if(num == 1 )
        return 1

    if( num == 0 ){
        return 1
    }
    
    return num *  fact(num-1)
}


console.log(
    fact(10));



console.log("-----------second largest ");


let arr = [1,3,4,4,5,5,,6,,76,,7,7,8,,,4,3,3,33,5,67,8,]

for(let a=0;a<arr.length;a++){
    if(arr[a] == '' || arr[a ]== undefined){
        arr.splice(a,1)
        a=a-1;
    }
}
console.log(arr);

let  max = 0;
for(let a of arr){
    if(a >= max){
        max = a;
    }
}
console.log(max);

let a = Math.max(...arr)
let b = Math.min(...arr)


console.log("max " +a +" ,", "min " + b);


console.log("-----------pattenrs -----------------");

let ab = "abcde"
for(let i=1;i<6;i++){
    let sp = " " .repeat(6-i);
    // console.log(sp);
    console.log(sp+"* ".repeat(i))
}


// repeated characterss


let str1 = "gjla;sggkjaolgelgmkigj";
let unique = []
for(let a of str1){
    let flag = 0;
    for(let b of unique){
        if(a == b){
            console.log(a);
            flag = 1;
            break;

        }

    }

    if(flag == 0){
        unique.push(a)
    }
}

console.log(unique)


let un = new Set(str1)

console.log(un);
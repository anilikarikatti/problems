// console.log("rest parameters");

// function add(...para){
//     // console.log(para);
//     let sum = 0
//     // let [a,b,c,d] = para;
//     // console.log(a,b,c,d);
//     console.log(arguments);
//     let d = Object.values(arguments);
//     for(let a of d)
//         sum+=a
//     return sum
// }
let arr = [10,20,3,05,6]

// let a = add(...arr)

// console.log(a);




// //spread syntax


// console.log(Math.max(...arr));


// // max

// function max(...params){
//     let max = 0;
//     // console.log(params);
//     for(let a of params){
//         if(a > max )
//             max = a;
//     }
//     return max
// }

// console.log(max(10,30));

// // console.log(...arr);



// concat

function concat(arr,...res){
    console.log(arr);

    for(let a of res){
        if(Array.isArray(a)){

            for(let b of a){

                        arr.push(b)
                    
    }
}
 else {
    arr.push(a)
 }
}
}
let arr2 =[75,67,4,6,4,6,4,3,3]

let arr3 =[34,6,6,]
concat(arr,arr2,arr3,1,0,0)

console.log(arr);


console.log("lorem100".repeat(1000));

console.log({0:100});

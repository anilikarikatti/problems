
// function al(name){
//     setTimeout(()=>{
//         return "hi"+name;
//     },2000)

// }

// async function inp(callback){
//     let name = "anil";

//     console.log(name);
//     // setTimeout(callback,2000,name);
//    let ans = await callback(name);
//     console.log(ans);
//     console.log("callback called");

// }

// inp(al)


function one(a,b){
    return function two(a,b){
        return a+b;

    }
    
}

let ans = one(10,20)(30,40);
// console.log(ans(30,40));
console.log(ans);


// iife 

(()=>{
    console.log("jai hind");
})()


// fun();
// function pro(val){
//     return new Promise ((res,rej)=>{
//         setTimeout(()=>res(val),200)

//     })
// }

// async function call(){
//     let arr = [12,34,56,7,7,8,8,8];
//     for(let a of arr){
//         let d = await pro(a);
//         console.log(d);
//     }

// let s = Promise.all(arr).then(val =>console.log(val))
// console.log(s);
    
// }

// call()


// let addition =(a,b)=>{
//     return new Promise((res,rej)=>{
//             if(typeof(a) == 'number' && typeof(b) == 'number')
//                 res(a+b)
//             else{
//                 rej("error in type")
//             }
//     })  
// } 

// addition(10,5).then(resp=>resp).then(val=>console.log(val+100)).catch(err=>console.log(err));



// let p1= new Promise((res,rej)=>{
//     setTimeout(res,500,"one");
// })


// let p2= new Promise((res,rej)=>{
//     setTimeout(res,500,"two");
// })


// let p3= new Promise((res,rej)=>{
//     setTimeout(rej,500,"three");
// })



// let call = async ()=>{

//     let startDate = new Date()
//     // let one = await p1;
//     // let two =await p2;
//     // let three =await p3;

//     Promise.all([p1,p2,p3]).then(values=>values.map(elem=>console.log(elem,endDate-startDate))).catch(reason=>console.log("error:" ,reason))
//     let endDate = new Date()

//     console.log(endDate-startDate);

//     // console.log(one,two,three,endDate-startDate);
// }

// call()


// dynamic promise 



function makePromise(name,val){
     name = new Promise((res,rej)=>{
        let fun = (val == '')? rej:res;
        if(fun == rej){
            val = "error in "+ name; 
        } 
        setTimeout(()=>{
            // console.log(val,fun);
            // res(val)
            fun(val)
        },500);
    // console.log(fun);

    })
    return name;

}

let arr = ["one","two","three"]
let startDate = new Date()
setTimeout(async ()=>{
    try{
        for(let a of arr){
            a = await makePromise(a,a);  
    
            console.log(a);
        }
    }
    catch(e){
        console.log(e);
    }

},1000)


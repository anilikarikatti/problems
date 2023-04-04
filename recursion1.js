// problemfind index of input number

let arr = [1,,1,11,2,3,4,5,6,6];

let val = 6;

// for(let a of arr){
    
//     if(a == val){
//         console.log(arr.indexOf(a))
//         arr.splice(arr.indexOf(a),1,0)
//     }
// }

// doing index of function 


// function index_of(arr,elem){
//     for(let i=0;i<arr.length;i++){

//         if(arr[i] == elem)
//             return i
//     }
//     return -1

// }

// console.log(index_of(arr,1))
// console.log(index_of(arr,1))
// console.log(index_of(arr,6))
// console.log(index_of(arr,1))


function index_of(arr,index,value){
    
    if (index == arr.length -1 ){
        
        return 
    }
    if(arr[index] == value){
        console.log(index);
        
    }
    
    return index_of(arr,index + 1,value)
}

index_of(arr,0,val)
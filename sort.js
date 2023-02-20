var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        libraryID: 1254
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245
    }
];
/*
function sor(title){
    return title.sort();
}

let m = library.map(elem=>elem.title)

// console.log(m);

let data = sor(m);

// console.log(data);

let sortedArray =[];
for(let a of data){
    for(let b of library){
        if(b.title == a){
            sortedArray.push(b);
        }
}
}


console.log(sortedArray);
// */

// let val = Object.keys(library);

// console.log(val);
// console.log(library);


let arr =[]

function add(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            for(let i=999;i>0;i--){
                arr.push(i)
                arr.push(i+1000)
            }
            
        res(arr)            // return arr
            
        },2000)
    
        
    })
    
}


// arr.push(99,1,23,4,23)
let  doubt =async ()=>{
   let arr1 =await add()
     console.log(arr1);

     console.log("sorted");
    await arr.sort((a,b)=>{
        if( a < b){
            return -1;
        }
        else if(a > b){
            return 1
        }
        else 
            return 0
    })

    console.log(arr);
}

// console.log(...arr);


doubt()

// arr.splice(0,99,"10000000".repeat(99));

// console.log(...arr);



// console.log("10");
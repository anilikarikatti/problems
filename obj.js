// let arr ={}
let arr1 =[]



for(let i=0;i<26;i++){
    let elem = String.fromCharCode(65+i);

    let obj = {}
    obj[elem]=i
    arr1[i] = obj;
}   
console.log(arr1);
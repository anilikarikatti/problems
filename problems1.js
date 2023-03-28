
/*
// let str = ["A","B","A","C","A","B"]

// let str = ["A","B","C","D","A","E","D","Z"];

let str = ["A","B","C","D","E","D","Q","Z","C"]

let arr = [];

for(let a =0 ;a<str.length;a++){
    if(!arr.includes(str[a])){
        arr.push(str[a])
        if(a == str.length - 1){
            arr.shift()
        }
    }
    else{
        let b = arr.indexOf(str[a])
        arr.splice(b,1);
        arr.push(str[a]);
    }
}

console.log(arr);

*/

// BRACKETS OPEN AND CLOSE


let str = "(c([od]er)) b(yt[e])"

 let obj = {
    '(':0,
    ')':0,
    '[':0,
    ']':0
 }
for(let a of str ){
    switch(a){
        case "(":
            obj["("]+=1;
            break;
        case ")":
            obj[")"]+=1;
            break;

        case "[":
            obj["["]+=1;
            break;
        case "]":
            obj["]"]+=1;
            break;
        
    }


} 
if(obj["("] == obj[")"] && obj["["] == obj["]"] ){
    console.log(1 , obj["("]+obj["["]);
}
else{
    console.log(0);
}

// console.log(obj['(']);

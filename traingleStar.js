/*
let star = "* "

let n =10;
let spaces = "";
for(let k=0;k<n;k++){
    spaces+=' ';
}

console.log(spaces);
for(let i=1;i<n;i++){
    let str = "";
    for(let j=0;j<i;j++){
        str+=star;
        

    }
    
    let sp =spaces.slice(i);

    console.log(sp+str);
}

*/
// border
/*
let star = "* ";

let n =15;
let spaces = "";
for(let k=0;k<n;k++){
    spaces+=' ';
}

for(let i=1;i<n;i++){
    let str = "";
    for(let j=0;j<i;j++){
        if(i == n-1){
            str+=star
        }

        else if(j==0 || j == i-1){
            str+=star;
        }
        else{
            str+="  ";
        }

        

    }
    
    let sp =spaces.slice(i);

    console.log(sp+str);
}
*/

// rectangle
// let star = "* ";

// let n =17;
// let str = "";

// for(let i=1;i<n;i++){
//     str += star;
// }

// for(let j=1;j<n;j++){
//     console.log(str);
// }

// border


let star = "* ";

let n =61;

for(let i=1;i<n;i++){
let str = "";

    for(let j =1 ;j<n;j++){
        if(i == 1 || i == n-1){
            str+=star
        }
        else if(j == 1 || j ==  n-1){
            str += star;
        }
        else{
            str += "  "
        }
    }
    console.log(str);
}


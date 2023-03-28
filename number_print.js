
let n =8
for(let i=1;i<n;i++){
    let spaces = ""
    for(let k=n;k>i;k--){
        spaces+=" ";
    }
    let str = ""
    for(let j=1;j<=i;j++){
        str+=j
    }
    for(let j=i-1;j>0;j--){
        str+=j
    }
    console.log(spaces + str);
}
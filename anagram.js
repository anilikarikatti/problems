let str1 = "ailnk sdngfhs";
let str2 = "iklna sdngfhs"

function anagram(str1,str2){
    str1 =str1.split('')
    str2 =str2.split('')
    let flag =0;
    console.log(str1.length );
    console.log(str2.length);
    if(str1.length  === str2.length){    
    for(let a of str1){

        if(str2.includes(a)){
            flag=1;
        }
        else{
            flag=0
        }
    }
}

    if(flag == 1){
        console.log("anagram");
    }
}

anagram(str1,str2)
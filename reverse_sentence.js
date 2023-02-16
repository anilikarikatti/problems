let sentence = "hello i from india";

let rev = sentence.split(' ').reverse().join(' ');

let rev_words = sentence.split('').reverse().join('');

console.log(rev_words);

console.log(rev);

console.log("-----------anagram------------");


let str1 = "marsy";

let str2  = "armfy";

if(str1.length == str2.length){
    let flag=0;
    for(let a of str1){
        if(!str2.includes(a)){
            flag = 1;
            break
        }
    }

    if(flag == 0){
        console.log(str1 + " and " + str2 + " is anagram");
    }
    else{
        // console.log("ak"/);
        console.log(str1 + " and " + str2 + " is not anagram");

    }
}

// permutations

console.log("-------------permutations----------------");


let word ="god";

function pr(wo){
    console.log(wo);
}

for(let o of word){
    
}
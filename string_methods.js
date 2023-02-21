let str = "Hello im from  india";

// /*
// let re = new RegExp(/^[a-z]/g);

// let data = str.match(re);

// data= str.replace(data[0],data[0].toUpperCase())


// console.log(data);
// */
// console.log(str.length);
// console.log(str.replace('ll','jj'));

// console.log(str.indexOf('o'));

// console.log(str.lastIndexOf('o'));

// console.log(str.startsWith('hello '));

// console.log(str.endsWith('dia'));


// console.log(str.toUpperCase());

// console.log(str.toLowerCase());


// console.log(str.includes('H'));

// console.log(str.repeat(10));


// let str = "* ";

// for(let i=1;i<10;i++){
//     console.log(''.repeat(10-i));
//     console.log(str.repeat(i)); 
// }

console.log(str.charAt(10));

console.log(str.charCodeAt(10));

// console.log(String.fromCharCode(722,69,98,98));

console.log(str.substring(4));

console.log(str.length);
let d= str.padEnd(22,"*")
console.log(d);

let str1 = "               h el o lo lo ll lolollol";

let z =str1.matchAll(/l+/g);

// for(let d of z){
//     console.log(d);
// }

// console.log(Object.values(z));
// console.log(z[0])

console.log('anil'.localeCompare('anir'));


console.log(str1.replaceAll('l',''));

console.log(str1.trim());

console.log(str1.concat("anilakkakakk"))
console.log(str1.split(' '));
console.log(str1.slice(15));

console.log(str1.substring(15));

let obj1 = {
    firstName : "anilkumar",
    lastName :" karikatti"
}


let obj2 = {
    firstName : "ak",
    lastName :"aa"
}

function printFullName(town,state){
    console.log(this.firstName + ' ' + this.lastName + ' '  + town + ' '+  state);


}

console.log("\n");

printFullName.call(obj1,"hubli","karnataka");

// printFullName.call(obj1);
printFullName.call(obj2,"savadatti","andra");

console.log("\n apply");

printFullName.apply(obj2,["savadatti","andra"]);

printFullName.apply(obj1,["hubli","karnataka"]);


console.log("\n bind");

let one = printFullName.bind(obj2,"savadatti","andra");

// console.log(one());
let two = printFullName.bind(obj1,"hubli","karnataka");

one()
two()
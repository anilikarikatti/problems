let obj1 = {
    first:"anil",
    last:"karikatti",
    fullName:function(fullname){
        console.log(this.first + " " + this.last + " "  + fullname);
    },
      pri:()=>{
                console.log(this.first + " " + this.last);
        console.log("hello");
    
}
}

let obj2 = {
    first:"ak",
    last:"karikatti",
}


obj1.pri()
// obj1.fullName()

// obj1.fullName.call(obj2,"fullname")

// obj1.fullName.apply(obj2,["fullname"])




// let fun = obj1.fullName.bind(obj2,"fullname")

// fun()

// obj1.pri()

// let obj2 = {
//     first:"ak",
//     last:"karikatti",
// }

// let ar = ()=>{
//     console.log(obj2.first,obj2.last);
// }

// ar()
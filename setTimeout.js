
function sayHi(name){
    console.log("hi"+name);

    // setTimeout(sayHi,1000,"anil");
    // clearInterval(id)

}

setTimeout(sayHi,1000);

var id =setInterval(sayHi,1000,"anil")

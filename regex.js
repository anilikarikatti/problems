

// let regex  = new RegExp(/^a...s$/g)
// let a  =regex.test("anils");


// let regex  = new RegExp(/^a[a-z]*z$/g)
// let a  =regex.test("askjgljlsdljklgz");


// // 10,000
// let regex  = new RegExp(/[\s]/g)
// let a  ="assdffdasdfz azsdz".split(regex)


// let str = "hellollolllllllllll l l ll l l erf"

// let regex = new RegExp(/[l]+/g)

// let a = str.search(regex);

// console.log(a);


// let str = "ansisdfn aassd addf dsa asdf adewwds"

// let str = "987 654 3210";

// let re = new RegExp(/(\d{3})-(\d{3})-(\d{3})/g)

// let re = /[\s+]/g;
// let a = str.replace(re,'-');


let str = "We can also assign a list to a slice. This replaces the slice with the new list. The slice you replace and the replacement slice don't have to have the same number of elements. That means you can use splicing to increase or decrease lists."


let re = /a[a-z]*/g

console.log(str.replace(re,` "starts_with_a"`));                            
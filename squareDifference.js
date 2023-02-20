
function sumOfsquare(start,stop){
    let sum = 0;

    for(let i=start;i<=stop;i++){
        let square = i * i;
        sum +=square;
    }
    return sum;
}


function squareOfsum(start,stop){
    let sum = 0;
    for(let i=start;i<=stop;i++){
        
        sum +=i;
    }

    return sum * sum;
}

let sos = sumOfsquare(1,100);
let sqOfS = squareOfsum(1,100);

console.log(sqOfS - sos);


let day = 1;
let month   = 1;
let year = 1900;

let obj = {
    1:31,
    3:31,
    5:31,
    7:31,
    8:31,
    10:31,
    12:31,
    4:30,6:30,9:30,11:30,
    2:28
}
let tot =0;
let sundays =0 ;
for(let y = year ; y <= 2000 ; y++){
    let leap =false;    
    let remaining_days =tot;
    if(year % 4 == 0 && year % 100 != 0){
        // return "leap year"
        leap = true;
    }
    else if(year % 400 == 0 && year % 100 == 0){
        // return "leap year"
        leap = true;

    }
    else{
        // return "not leap";
        leap = false;
    }


    for(let m = month ; m <=12;m++){
        // console.log(obj[m]);
        // console.log(days);

        let days = obj[m] + remaining_days;

        if(leap){
            if(m == 2){
                days = 29+remaining_days;
            }
        }
        sundays += Math.floor(days / 7)

        // console.log(remaining_days,days,sundays);

        days = Math.floor(days % 7)

        
        remaining_days=days;
    }
    tot = remaining_days;
}

// console.log(remaining_days/7);
// let tot = remaining_days / 7;
// console.log(sundays);

// console.log(remaining_days);

console.log(sundays);
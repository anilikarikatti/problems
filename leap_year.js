function leap(year){
  
        if(year % 4 == 0 && year % 100 != 0){
            return "leap year"
        }
        else if(year % 400 == 0 && year % 100 == 0){
            return "leap year"
        }
        else{
            return "not leap";
        }
    
 }


 console.log(leap(1000));
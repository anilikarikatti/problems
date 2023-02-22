d nlet reached =0;

let days = 1;

let total_tree_length = 30;

while(reached <= total_tree_length){
    // console.log(days);
    reached+=2;
    if(reached == total_tree_length){
        console.log(days);

        break;
    }
    reached-=1;
    days+=1;

    // console.log(reached);
}

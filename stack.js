
// staack 


class Stack {
    constructor(){
        this.items =[];
        this.size = 0
    }

    insert(val){
        this.items.push(val);
        this.size ++;
    }

    delete(){
        this.items.pop();
        this.size --;
    }

    print(){
        return this.items.toString();
    }

    topValue(){
        return this.items[this.size - 1]  
    }
    
    sizeofStack(){
        return this.items.length
    }


    top(){
        return this.items  
    }
    
}

let stack = new Stack();



stack.insert(10)
stack.insert(20)
stack.insert(30)


// stack.delete()
// stack.delete()



// console.log(stack);
console.log(stack.print());

console.log(stack.top());

console.log(stack.sizeofStack());


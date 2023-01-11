
console.log("-----Queue ---------------");

/*
class Queue{


    constructor(){
        this.items = [];

        this.size = 0;
    }

    rear(val){
        this.items.unshift(val);
        this.size ++;
    }

    front(){
        this.items.pop();
        this.size--;
    }


    print(){
        return this.items.toString()
        // this.size--;
    }
}


let queue= new Queue();

console.log(queue);

queue.rear(10)
queue.rear(20)
queue.rear(30)

console.log(queue.print());
*/

console.log("---------Queue in object ------------");

class Queue{
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0

    }

    add(elem){
        this.items[this.rear] = elem;
        this.rear++;
    }

    delete()
    {
        let item =  this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item
    }

    print()
    {
      return Object.values(this.items).toString()
    }

}

let queue1 = new Queue();


queue1.add(10)
queue1.add(20)
queue1.add(30)
queue1.add(40)  

queue1.print()
console.log(queue1.print());

console.log(queue1.delete());
console.log(queue1.print());



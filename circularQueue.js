
class CircularQueue{
    constructor(){
        this.arr = [];
        this.size = 5;
        this.rear=0;
        this.front = 0;
        this.pos = 0;
    }

    enque(elem){
        if(this.pos < this.size){
            this.arr[this.pos]=elem;
            this.rear++;
            this.pos++;
            console.log(elem);
        }
    }

    deque(){
        if(this.front < this.size && this.arr[this.front]){
            delete this.arr[this.front]
            this.front++;
            if(this.pos >= 5){
                this.pos=0;
                this.rear = 0
            }
        
        }
        else{
            this.front =this.rear
        }
    }
}

let cir = new CircularQueue();

cir.enque(10)
cir.enque(20)
cir.enque(30)
// cir.enque(40)
// cir.enque(50)

cir.deque()
// cir.enque(60)
cir.deque()
cir.deque()
cir.deque()

cir.enque(30)


console.log(cir);


class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Linked_List
{
    constructor(){
        // this.list = [];
        this.size = 0;
        this.head = null;

    }

    append(value){
        let node = new Node(value)
        if(this.size === 0){
            this.head = node;
        }
        else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
    }
    this.size++
}

    prepend(value){
        let node = new Node(value)
        if(this.size === 0){
            this.head = node;
        }
        else{
            node.next = this.head
            this.head = node
        }
        this.size++;
    }

    print(){
        if(this.size === 0){
            return "empty list"
        }
        else{
            let curr = this.head;
            let list_Values = ' ';
            while(curr){
                list_Values += curr.value + ' ';
                curr = curr.next;
            }

            console.log(list_Values);
        }
    }
}

// console.log(node);

let list = new Linked_List()

// let node = new Node(10)


list.append(10)
list.append(30)

list.append(50)

// console.log(list.add(10));
// console.log(list.add(50));
console.log(list);

list.print()


class HashTable {
    constructor(n){
        this.array = new Array(n);

        this.size = n
    }
    hashing(key){
        let ind = 0;
        for(let s of key){
            let index = s.charCodeAt();
            ind+=index;
        }
        // console.log(ind,this.size);
        let final = ind % this.size;
        // console.log(final);
        return final
    }
    add(key,value){
        let final = this.hashing(key)
        // this.array[final] = value
            this.array[final];
        
        if(!this.array[final]){
            this.array[final] = [[key,value]]
        }
        else{
            let samekey = this.array[final].find(item => key === item[0])
            // console.log(samekey);
            if(samekey){
                samekey[1] = value;
            }
            else{
                this.array[final].push([key,value])
            }
        }

    }

    get(key){
        let final = this.hashing(key)
        // return this.array[final] 
        console.log(this.array[final] );
        
    }


        remove(key){
        let final = this.hashing(key)
        // return this.array[final] 
        console.log(this.array[final] );
        this.array[final]= undefined
        
    }

    display(){
        for(let a of this.array){
            if(a){
               console.log(a);
            }
        }
    }

}

let obj1 = new HashTable(10)


obj1.add("in","india")
obj1.add("en","england")
obj1.add("am","america")
obj1.add("e","en")
obj1.add("jp","japan")
obj1.add("gr","german")
obj1.add("sw","switerzlandd")
obj1.add("db","dubai")
obj1.add("fr","france")
obj1.add("pak","pakistan")

console.log(obj1);

obj1.display()
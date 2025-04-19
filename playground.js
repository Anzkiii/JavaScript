


function Node(value, next = null){
    return{
        value:value,
        next,
    }
}

const ll = {

    head:null,

    insertLast(value){
        const newNode = Node(value);
        if (this.head === null){
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.next !== null){
            current = current.next;
        }

        current.next = newNode;
    },

    print(){
        if (this.head === null){ return; }
        let current = this.head;
        while (current){
            console.log(current.value);
            current = current.next;
        }
    },

    getSum(){

        if (this.head === null) { return; }

        let current = this.head;
        let count = 0;

        while (current !== null){
            count += current.value;
            current = current.next;
        }
        console.log(count);
    },

    // search(value){

    //     let current = this.head;

    //     while (current !== null){

    //         if (current.value == value){
    //             return true;
    //         }
    //         current = current.next;
    //     }
    //     return false;
    // },

    search(value, current = this.head){

        if (current === null) return false;

        if (current.value == value){
            return true;
        }
        console.log(current.value)
        return this.search(value, current.next);
    },

    getNodeValue(index){

        if (this.head === null) { return; }
        if (index >= this.getLinkedListLength() || index < 0) { return "Out of range!";}
        
        let current = this.head;
        let count = 0;
        
        while (count < index ){
            current = current.next;
            count++;
        }
        return current.value;
    },

    getLinkedListLength(){

        if (this.head === null) {return 0; }

        let current = this.head;
        let counter = 0;

        while (current !== null){
            current = current.next;
            counter++;
        }
        return counter;
    }

}

ll.insertLast(2)
ll.insertLast(8)
ll.insertLast(3)
ll.insertLast(7)

console.log(ll.getNodeValue());

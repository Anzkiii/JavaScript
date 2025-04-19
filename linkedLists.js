function createNode(value){
    return {
        value: value,
        next: null
    }
}

const linkedList = {
    head: null,

    addLast(value){
        const newNode = createNode(value);

        if (this.head === null){
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null){
                current = current.next;
            }
            current.next = newNode;
        }
    },

    addFirst(value){
        this.head = new createNode(value, this.head);
    },

    removeLast(){
        if (this.head === null) { return }

        if (this.head.next === null){
            this.head = null;
            return;
        }
        let current = this.head;

        while (current.next.next !== null){
            current = current.next;
        }
        current.next = null;
    },

    removeFirst(){
        if (this.head === null) { return }
        this.head = this.head.next;
    },

    listCount(){
        let count = 0;
        let current = this.head;
        while (current !== null) {
            current = current.next;
            count++;
        }

        return count;
    },
    print(){
        if (this.head === null) { 
            console.log("List is emtpy")
            return 
         };
        let current = this.head;

        while (current !== null){
            console.log(current.value)
            current = current.next;
        }
    },

    searchValue(value){
        let current = this.head;
        
        while (current){
            if (current.value === value){
                return current.value;
            }
            current = current.next;
        }
        return "Value not found";
    },

    searchIndex(value){
        let current = this.head;
        let index = 0;

        while (current){
            if (current.value === value) { return index; }
            current = current.next;
            index++;
        }
        return -1;
    },

    insertAt(value, index){

        if (index < 0 || index > this.listCount()){
            return;
        }

        if (index === 0){
            this.head = createNode(value, this.head);
            return;
        }

        const node = createNode(value);
        let current = this.head;
        let count = 0;
        let previous;

        while (count < index){
            previous = current;
            count++;
            current = current.next;
        }

        node.next = current;
        previous.next = node;
    },

    reverseList(){

        let current = this.head;
        let previous;
        while (current){
            previous = current;
            current = current.next;
        }
        previous.next = this.head;
        console.log(previous.next)

    }
}

var list = linkedList

list.addLast("Edward");
list.addLast("Yoan");
list.addLast("Arthur");

list.insertAt("Reem", 1);
list.reverseList();
list.print();

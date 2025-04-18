function createNode(value){
    return {
        value: value,
        next: null
    }
}

const linkedList = {
    head: null,

    add(value){
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

    removeLast(){
        if (this.head === null) { return };

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


        console.log(`The count is: ${count }`)
        return;
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
    }
}

var list = linkedList

list.add("Edward");
list.add("Yoan");
list.add("Arthur");


list.listCount()

list.removeFirst()

list.listCount()

list.print()

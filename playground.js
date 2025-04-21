


class Node {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

class linkedList {
    constructor(head = null){
        this.head = null;
    }
    insertLast(value){
        let newNode = new Node(value);
        if (this.head === null){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null){
            current = current.next;
        }
        current.next = newNode;
    }

    print(){
        if (this.head === null) { return; }
        let current = this.head;
        while (current !== null){
            console.log(current.value);
            current = current.next;
        }
    }

    zipList(head1,head2){
        let tail = head1;
        let current1 = head1.next;
        let current2 = head2;
        let count = 0;

        while (current1 !== null && current2 !== null) {
            if (count % 2 == 0){
                tail.next = current2;
                current2 = current2.next;
            } else {
                tail.next = current1;
                current1 = current1.next
            }
            tail = tail.next
            count++;
        }
        if (current1 !== null) { tail.next = current1;}
        if (current2 !== null) { tail.next = current2;}
        
        return head1;
    }
}
const ll1 = new linkedList();
const ll2 = new linkedList();

ll1.insertLast(1);
ll1.insertLast(2);

ll2.insertLast(5);
ll2.insertLast(6);


const ll3 = new linkedList();
ll3.head = ll1.zipList(ll1.head, ll2.head);

ll3.print()

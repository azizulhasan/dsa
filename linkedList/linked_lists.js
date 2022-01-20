class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList{

    constructor(){
        this.head = null
        this.size = 0
    }

    /**
     * insertAtFirt
     * 
     * Check if head is null or not
     * if null then assign new node to it.
     * if not null then assign the head as new node's next value.
     */ 
    insertAtFirst(data){
        
        if(this.head == null){
            this.head = new Node(data)
        }else{
            // let currentNode = this.head
            // this.head = newNode
            // newNode.next = currentNode
           this.head =  new Node(data, this.head)
        }
        this.size++
    }

    /**
     * insertAtLast
     * 
     * Check if head is null or not
     * if null then assign new node to it.
     * if not null then loop till last node and  assign the new node as next value of last node.
     */ 
    insertAtLast(data){
        let newNode = new Node(data, this.head)

        if(this.head == null){
            this.head = new Node(data)
        }else{
            let currentNode = this.head
            let previous = null
            while(currentNode){
                if(currentNode.next == null){
                    currentNode.next = new Node(data)
                    previous.next = currentNode
                    break;
                }

                previous = currentNode
                currentNode = currentNode.next

            }

            this.size++
        }
    }

    /**
     * This function will insert a node before spacefic node.
     * @param {number} data new node data
     * @param {number} target_data before which data new node will be inserted
     */
    insertBefore(data, target_data){
        let currentNode = this.head
        if(currentNode.data == target_data){
            this.insertAtFirst(data)
        }else{
            let previous = null
            while (currentNode){
                if(currentNode.data == target_data){
                    let newNode = new Node(data)
                    newNode.next = currentNode
                    previous.next = newNode
                    break;
                }
                previous = currentNode
                currentNode = currentNode.next

            }
            
            this.size++
        }

    }

    
    /**
     * @method insertAfter this method is for inserting a node after a target data
     * 
     * @param {number} data new Node data. 
     * @param {number} target_data number after which new node will be  inserted.
     */
    insertAfter( data,   target_data){
        let currentNode = this.head
        let nextNode = null
        while(currentNode){
            if(currentNode.data == target_data){
                let newNode = new Node(data)
                if(nextNode.next != null){
                    newNode.next = nextNode
                }
                currentNode.next = newNode
                this.size++
                break;
            }
            currentNode = currentNode.next;
            nextNode = currentNode.next
        }
    }

    // insert

    // deleteFirst

    // deleteLast

    /**
     * @method delete
     * @param {number} data is any number which will be deleted from linked lists.
     */
    delete(data){
        let currentNode = this.head
        let previous = null
        // This condition is true if "data"  is first data
        if(currentNode.data == data){
            
            this.head = currentNode.next
            this.size--
            console.log(this.head )
        }else{
            while(currentNode !== null){
                if(currentNode.data == data){
                    // This condition is true if "data" is last data
                    if(currentNode.next == null){
                       previous.next = null
                    }else{
                        previous.next = currentNode.next
                    }
                    this.size--
                    break;
                }
                previous = currentNode
                currentNode = currentNode.next
            }
        }
    }

    delete_duplicate(){
        let map = {}
        let currentNode = this.head
        while(currentNode){
            if(currentNode.data in map){
                this.delete(currentNode.data)
            }else{
                map[currentNode.data] = currentNode.data
            }
            currentNode = currentNode.next
        }
    }
    delete_duplicate_from_sorted_linked_list(){
        let currentNode = this.head
        while(currentNode.next != null){
            let nextNode = currentNode.next
            while(nextNode.next != null && nextNode.data == currentNode.data){
                nextNode = nextNode.next
                this.size--
            }
            if(nextNode.next == null){
                currentNode.next = null
                this.size--
            }else{
                currentNode.next = nextNode
            }
            currentNode = nextNode
        }
    }
    /**
     * Delete node by index number.
     * @param {numbr} index 
     */
    delete_by_index(index){
        if(index > 0 && index >= this.size){
            return
        }
        let currentNode = this.head
        if(0 == index){
            this.head = currentNode.next
        }else{
            let count = 0
            let previous = null
            while(count < index){
                count++
                previous = currentNode
                currentNode = currentNode.next
            }
            previous.next = currentNode.next
        }

        this.size--
    }

    // traverse
     reverseList() {
       let next = null, curr = this.head, prev = null
       while(curr != null){
           next = curr.next
           curr.next = prev
           prev = curr
           curr = next
       }
       this.head = prev
    }
    /**
     * Reverse list from nth (as left ) position to nth ( as right ) position. 
     * where left <= right 
     * 
     * @param {number} left postion of list from where the linked list will be reversed.
     * @param {*} right position of list till where the linked list will be reversed.
     */

    reverseList_By_position(left, right){
        let next = null,curr = this.head,prev = null,count = 1

        if(left == right){
            return
        }else{
            // while(curr != null){

            // }
        }
    }

    // 
    /**
     * @method sumOfLinkedLists  
     */
    sumOfLinkedLists(){
        let currentNode = this.head
        let sum = 0
        if(this.size == 1){
            sum = currentNode.data
        }else{
            while(currentNode){
                sum += currentNode.data
                currentNode = currentNode.next
            }
        }

        console.log("Sum of Linked Lists : "+sum)
    }

    // display
    displayAll(){
        let currentNode = this.head
        console.log("Total node is : "+this.size)
        while(currentNode){
            console.log(currentNode.data)
            currentNode = currentNode.next
        }
    }
    
}

let lst = new LinkedList()
// lst.insertAtFirst(2)
// lst.insertAtFirst(1)
// lst.insertAtFirst(1)
// lst.insertAtFirst(1)
// lst.insertAtFirst(6)
// lst.insertAtFirst(1)
// lst.insertAtFirst(2)
// lst.insertAtFirst(6)
// lst.insertAtFirst(2)
// lst.insertAtFirst(7)
// lst.insertAtLast(100)
// lst.insertBefore(121, 7)
// lst.insertBefore(122, 7)
// lst.insertAfter(123, 7)
// lst.insertAtLast(200)
// lst.insertBefore(111, 200)
// lst.insertAfter(1211, 200)


// console.log(lst)
// lst.delete(1)
// lst.delete(2)
// lst.delete(1)
// lst.delete(2)
// lst.delete_duplicate()
// Delete duplicate nodes if linked list is sorted.
lst.insertAtFirst(1)
lst.insertAtFirst(1)
lst.insertAtFirst(1)
lst.insertAtFirst(1)
lst.insertAtFirst(2)
lst.insertAtFirst(2)
lst.insertAtFirst(2)
lst.insertAtFirst(2)
lst.insertAtFirst(2)
lst.insertAtFirst(4)
lst.insertAtFirst(4)
lst.insertAtFirst(4)
lst.insertAtFirst(4)

lst.delete_duplicate_from_sorted_linked_list()

/**
 * Delete node by index number.
 */
console.log(lst)
// lst.delete_by_index(3)
lst.displayAll()
lst.reverseList()
console.log(lst)

lst.sumOfLinkedLists()

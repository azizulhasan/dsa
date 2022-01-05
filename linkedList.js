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

    // insert  first node
    insertFirst(data){

            this.head = new Node(data, this.head) 
            this.size++
    }

    // insert last node
    insertLast(data){

        let node = new Node(data)
        let current;

        if(!this.head){
            this.head = data
        }else{
            current = this.head;

            while(current.next){
                current =  current.next
            }
            current.next = node;

        }
        this.size++
    }



    insertAt(data, index){

        
        if(!data){
            return
        }else if(index > 0 && index > this.size){
            return;
        }else if(index == 0){

            this.head = new Node(data, this.head)
            this.size ++;
        }else if(index == this.size  ){
            this.insertLast(data)
        }else{

            let node = new Node(data)

            let previous, current;

            current = this.head;
            let count = 0;

            while( count < index){

                previous = current;

                count++;

                current = current.next;
            }

            node.next = current;

            previous.next = node;

            this.size++;
        }

        
    }

    // get index
    // getIndex(index){

    //     if(index> 0 && index > this.size){
    //         return;
    //     }else{
    //         let count = 0; 

    //         let current = this.head;

    //         while(current){
                
    //             if(count == index){
    //                 console.log(current.data)
    //             }
    //             current = current.next;
    //             count++
                
    //         }
    //     }
    // }








    // get index 

    getIndex(index){

        if(!index) return;

        if(index > 0 && index > this.size){
            return ;
        }else{
            

            let current = this.head;
            let count = 0;
            while(current){
                count++ ;

                if(count == index){
                    console.log('current: '+current.data)
                }

                current = current.next;
            }
        }
    }

    // remove index

    // removeAt(index){

    //     if(index > 0 && index > this.size){
    //       return
    //     }
  
    //     let count = 0; 
    //     let current = this.head
    //     //console.log(this.head)
    //     let previous;
    //     while( count < index ){
            
    //       previous = current;
    //       current = current.next;
  
    //       count++
    //     }
    //     //console.log(previous, current)
    //     previous.next = current;
    //     // this.size--;
    //   }









    removeAt(index){
        if(!index) return;
        if(index > 0 && index > this.size){
            return;
        }else{

            let count = 0;

            let current = this.head;
            let previous;

            while(count < index){

                
                previous = current;
               
                current = current.next;

                count++;
            }

            previous.next = current.next;

            

            
            this.size--;
        }
    }













  
  
    // print list data
    // printListData() {
    //     let current = this.head
    //     console.log(this.head, this.size)
    //     while(current){
    //         console.log(current.data);
    //         current = current.next;
    //     }
    // }
















    printListData(){

        console.log(this.head);

        let current   = this.head;

        while(current){
            console.log(current.data)

            current = current.next
        }
    }

    // clear list data

















}


const ll = new LinkedList()

ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertLast(400)
ll.insertAt(2000, 0)
ll.insertAt(1000, 5)

// ll.getIndex(4)
ll.removeAt(2)
ll.printListData();
// console.log(ll.printListData())
console.log(ll.size)
// ll.removeAt(2)
// ll.printListData();


// console.log(ll.size);



// const n1 = {
//     data: 100
// }
// const n2 = {
//     data: 200
// }
// n1.next = n2;
// console.log(n1);




// find the index of a given value.
// if not found the index of a given number then return false
/************************************
 * ITARATIVE SOLUTION
 */
/*
const arr = [2, 3, 4,5, 6, 7, 8, 9]
function findIndex(arr, val){

    let left = 0;
    let right = arr.length - 1;
    
    while( left < right ){
        let mid = Math.floor( (left + right )/ 2)
        console.log( left , right , mid)
        if( arr[mid] == val){
            return mid;
        }else if (val < arr[mid]){
            right = mid - 1;
        }else{

            left = mid + 1

        }
        
    }

    return false;

}
console.log(findIndex(arr, 7))
*/

/************************************
 * RECURSIVE SOLUTION
 */

 const arr = [2, 3, 4,5, 6, 7, 8, 9]
 function findIndex(arr,target, left , right){


        if(left > right){
            return false;
        }
        let mid = Math.floor( (left + right )/ 2)

        
        if( arr[mid] == target){

            console.log(arr[mid], left , right , mid)

            return mid;

        }else if (target < arr[mid]){

           return  findIndex(arr, target, left , parseInt(mid-1))
        }else{

           return  findIndex(arr, target, parseInt(mid + 1) , right)
        }

}

console.log(findIndex(arr, 99, 0 , parseInt(arr.length-1)))
// console.log(findIndex(arr, 20))


/*
class Node{
    constructor(data , next= null){
        this.next = null
        this.data = next
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // insertFirst
    // insertLast
    // insertAt
    // removeAt
    // getIndex
    // printListData
    // clearList
}
*/

class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null;
    }
}
class BinarySearchTree{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }

    insert(data){
    
        if(data  < this.data && this.left){
            this.left.insert(data)
        }else if (data < this.data){
            this.left = new BinarySearchTree(data)
        }else if (data > this.data && this.right){
            this.right.insert(data)
        }else if (data > this.data){
            this.right = new BinarySearchTree(data)
        }
    }

    contains(data){

    }

    validate(data){

    }
}




const validate = (node, min = null, max = null ) => {

    if ( max !== null && node.data > max ){

        return false;
    }

    if ( min !== null  && node.data < min ){

        return false;
    }


    if(node.left && !validate(node.left, min, node.data)){

        return false;
    }

    if( node.right && !validate( node.right, node.data, max)) {

        return false;
    }

    return true;
}

// const validate = (node, min = null, max = null) => {
//     if(max !== null && node.data > max) {
//       return false;
//     }
  
//     if(min !== null && node.data < min) {
//       return false;
//     }
  
//     if(node.left && !validate(node.left, min, node.data)) {
//       return false;
//     }
  
//     if(node.right && !validate(node.right, node.data, max)) {
//       return false;
//     }
  
//     return true;
//   }


const bst1 = new BinarySearchTree(10)
console.log('BST:', bst1);

// Insertion
bst1.insert(0);
bst1.insert(12);
console.log('After Insertion:', bst1);
bst1.insert(-1);
bst1.insert(4);
bst1.insert(11);
bst1.insert(20);
console.log('After Insertion:', bst1);
bst1.insert(-20);
bst1.insert(17);
bst1.insert(99);
console.log('After Insertion:', bst1);

// Contains
const minTwenty = bst1.contains(-20);
console.log('Is it here:', minTwenty);
const hundred = bst1.contains(100);
console.log('Is it here:', hundred);

// Validate
const validated = validate(bst1);
console.log('Is it valid:', validated);
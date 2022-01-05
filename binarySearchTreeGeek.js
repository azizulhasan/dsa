class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTreeGeek{
    constructor(){
        this.root = null
    }

    insert(data){
        var newNode = new Node(data)

        if(this.root == null){
            this.root = newNode
        }else{
            this.insertNode(this.root , newNode)
        }
    }

    insertNode(root , newNode){

        if(newNode.data < root.data){
            
            if(root.left == null){
                root.left = newNode;
            }else{
                this.insertNode(root.left, newNode)
            }
        }else{
            
            if(root.right == null){
                root.right = newNode
            }else if(root == null ){
                
                root.right = newNode
            }else{

                this.insertNode(root.right, newNode)
            }

        }
    }

    remove(data){


        this.root = this.removeNode(this.root, data)
    }

    removeNode(root, data){
 
        if(root == null){
            
            return null
        }else if ( data < root.data){

            root = this.removeNode(root.left, data)
            return root;
        }else if( data > root.data ){

            root = this.removeNode( root.right, data)
            return root;
        }else{

            if(root.left === null && root.right === null)
                root = null
                return root;

            if(root.left === null ){
                root = root.right;
                return root;
            }else if( root.right === null ){
                root = root.left;
                return root;
            }


            var aux = this.findeMinNode(root.right)
            root.data = aux.data

            root.right = this.removeNode(root.right, aux.data)

            return root;
        }

    }

    findMinNode(node){

        if(node.left === null){
            return node
        }else{

            return this.findMinNode(node.left);
        }
    }

    findMaxNode(node){
        if(node.right == null){

            return node;
        }else{

            return this.findMaxNode(node.right)
        }
    }

    preorder(node){

        if(node !== null){
            console.log(node.data)
            this.preorder(node.left)
            this.preorder(node.right)
        }
    }

    inorder(node){

        if(node !== null ){
            this.inorder(node.left)
            console.log(node.data)
            this.inorder(node.right)
        }
    }

    postorder(node){

        if( node !== null ){
            this.postorder(node.left)
            this.postorder(node.right)
        }
    }

    getRootNode(){

        return this.root;
    }


    search(node, data){

        if(node == null){

            return null;
        }else if( data < node.data){

            return this.search( node.left , data)
        }else if (data > node.data){

            return this.search( node.right , data )
        }else{


            if(node.data == data){
                return node
            }else{
                    console.log('asdfas')
                return false;
            }
        }
    }


}

var BST = new BinarySearchTreeGeek(15)


BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

// console.log(BST)
// console.log(BST.root)
// console.log(BST.root.left)
// console.log(BST.findMinNode(BST.root))
// console.log(BST.findMaxNode(BST.root))

root = BST.getRootNode()
// console.log(BST.preorder(root))
// console.log(BST.inorder(BST.root))
// console.log(BST.postorder(BST.root))

console.log(BST.search(root, 99))
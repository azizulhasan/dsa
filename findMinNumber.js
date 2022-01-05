// To solve this problem there could be many ways.

/**************************************/
// 1rst solution
/**************************************/
// Asume 1 element of array is minimum the compare it with second one. 
// if second one is less than 1rst one than asume 2nd one is mininumber number
// Now follow the rule till end.
/*
function findMinNumber(arr){

    
    if(!arr.length){
        alert("Array should not be empty")
    }else if(arr.length === 1){
        return arr[0]
    }else{
        let curr = arr[0];

        for(let i = 0; i < arr.length; i++) {
            if(arr[i] < curr) {
                curr = arr[i]
            }
        }

        return curr
    }
}

const res = findMinNumber([1,32,4, 5,])

console.log(res);

*/

/**************************************/
// 2nd  solution
/**************************************/
// sort the array in assending order and then return the 1rst element of array.

/*function findMinNumber(arr){
   return  arr.sort((a, b)=>  a - b )[0]
}

const res = findMinNumber([1,32,4, 5,])

console.log(res)*/

/**************************************/
// 3rd  solution
/**************************************/
// sort the array in descending order and then return the last element of array.


function findMinNumber(arr){
    return  arr.sort((a, b)=>  b - a )[arr.length-1]
 }
 
 const res = findMinNumber([1,32,4, 5,])
 
 console.log(res)



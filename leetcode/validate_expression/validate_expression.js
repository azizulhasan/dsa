let expression = "(){}[]"
/**
 * If one type of bracket is start and next bracket is not the opposite of the previous one 
 * then this expression is not valid.
 * 
 */
let valid = true;
for(let i =0; i< expression.length; i++){
    
    let prev = ""
    if( i%2 == 0){
        prev = expression[i+1]
    }
    console.log(prev)
    if(prev != ''){
        if((expression[i] == "(" && prev != ')' )
            || (expression[i] == "{" && prev != "}" )
            || (expression[i] == "[" && prev != "]" )
        ){
            console.log(expression[i] , prev)
            valid = false
        }
        
    }
    prev = ""
}

console.log(valid)
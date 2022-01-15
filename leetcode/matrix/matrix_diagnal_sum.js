// let diagnal = [[1,2,3],
//                [4,5,6],
//                [7,8,9]]
let diagnal = [[1,2,3, 4],
               [4,5,6,6],
               [7,8,9,9],
               [7,8,9,9]
            ]
let mat = [[1, 2, 3, 4, 5 ],
               [6, 7, 8, 9, 10],
               [11,12,13,14,15],
               [16,17,18,19,20],
               [21,22,23,24,25]
            ]
            

var diagonalSum = function(mat) {
    let data = []
    let temp = null
    let mid = Math.floor(mat.length / 2 )
    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[i].length; j++){
            
            
            if(j > mid){
                    temp = mat[i].length - i
                    data.push(mat[i][temp])
            }else{
                    temp = j + i
                data.push(mat[i][temp])
            }
        }
    }
    
    // console.log(data)
};
diagonalSum(mat);
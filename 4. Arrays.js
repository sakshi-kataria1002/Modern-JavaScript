// ARRAYS
// Structured Data => Index => Programming engines
// We can store different types of data types in an array

let a = [10, 12, 14, 'something', true]
console.log(a)

// Single-Dimensional Array
let b = [10, 12, 13, 'something', true]
console.log(b[3])

// Multi-Dimensional Array
let c = [[1, 2], [3, 4]]
console.log(c[0][1])

// Addition of Matrices
// 1st Matrix: 1 2      2nd Matrix: 4 5
//             3 4                  6 7

// Sum of Matrix1 and Matrix2
// 1+4 2+5 =  5 7
// 3+6 4+7 =  9 11

let matrix1 = [[1, 2], [3, 4]]
let matrix2 = [[4, 5], [6, 7]]

//let sampleMatrix = [1, 2, 3, 4, 5]
//console.log(sampleMatrix.length) // to find the length of sampleMatrix

let sum = [[], []]
for(let i = 0; i < matrix1.length; i++){
    for(let j = 0; j < matrix2.length; j++){
        sum[i][j] = matrix1[i][j] + matrix2[i][j]
        // sum[0][0] = matrix1[0][0] + matrix2[0][0] = 1 + 4
        // sum[0][1] = matrix1[0][1] + matrix2[0][1] = 2 + 5
        // sum[1][0] = matrix1[1][0] + matrix2[1][0] = 3 + 6
        // sum[1][1] = matrix1[1][1] + matrix2[1][1] = 4 + 7
    }
}
console.log(sum)

// Multiplication of Matrices

// 1 2  5 6
// 3 4  7 8
//----------
// 19    22
// 43    50

// 00 -> 1*5+2*7 = 19
// 01 -> 1*6+2*8 = 22
// 10 -> 3*5+4*7 = 43
// 11 -> 3*6+4*8 = 50

var array3 = [[1, 2], [3, 4]]
var array4 = [[5,6], [7, 8]]
var multi = [[0, 0], [0, 0]]

for (var i = 0; i < array3.length; i++){
    for(var j = 0; j < array4.length; j++){
        for(var k = 0; k < array4.length; k++){
            // let a = 10, b = 11
            // a += b
            // a = a + b
            multi[i][j] += array3[i][k] * array4[k][j]
            // Iteration 1
            // i = 0, j = 0, k = 0
            // sum[0][0] += array3[0][0] * array4[0][0]
            // sum[0][0] += 1 * 5
            //Iteration 2
            // i = 0, j = 0, k= 1
            // sum[0][0] += array3[0][1] * array4[1][0]
            // sum[0][0] += 2 * 7
            // sum[0][0] = 1 * 5 + 2 * 7 => 19
            // Iteration 3
            // i = 0, j= 1, k = 0
            // sum[0][1] += array3[0][0] * array4[0][1]
            // sum[0][1] += 1 * 6
            //Iteration 4
            // i = 0, j = 1, k = 1
            // sum[0][1] += array3[0][1] * array4[1][1]
            // sum[0][1] += 2 * 8
            // sum[0][1] = 1 * 6 + 2 * 8 => 22
            //Iteration 5
            // i = 1, j = 0, k = 0
            // sum[1][0] += array3[1][0] * array4[0][0]
            // sum[1][0] += 3 * 5
            //Iteration 6
            // i = 1, j = 0, k = 1
            // sum[1][0] += array3[1][1] * array4[1][0]
            // sum[1][0] += 4 * 7
            // sum[1][0] += 3 * 5 + 4 * 7 => 43
            //Iteration 7
            // i = 1, j = 1, k = 0
            // sum[1][1] += array3[1][0] * array4[0][1]
            // sum[1][1] += 3 * 6
            //Iteration 8
            // i = 1, j = 1, k = 1
            // sum[1][1] += array3[1][1] * array4[1][1]
            // sum[1][1] += 4 * 8
            // sum[1][1] += 3 * 6 + 4 * 8 => 50
            // 19   22 // Final Matrix/ Multiplied Matrix
            // 43   50
        }
    }
}
console.log(multi)

// ASSIGNMENT => MULTIPLICATION OF MATRIX and 
//ASSIGNMENT => What is Structured and Unstructured Data
//(12/04/2022)

var array5 = [1,2,3,4]
console.log("Array Check: "+ array5) 
var array6 = new Array([1,2,4,5])
console.log("Array Check: " + array6)

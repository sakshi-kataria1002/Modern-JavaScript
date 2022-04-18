// Declaring an Array

var array1 = [1,2,3,4]
var array2 = new Array([1,2,3,4])

//BUILT IN METHODS

//1. Concat Method
//Syntax: Array.concat(array1, array2,......, arrayn)
//Usage: Merging multipe arrays

var alpha = ["a", "b", "c", "d"]
var numeric = [1, 2, 3, 4]
var numeric1 = [5, 6, 7, 8]

var alphaNumeric = alpha.concat(numeric, numeric1)
console.log("Concat Method: " + alphaNumeric)
console.log("Typeof alphaNumeric: " + typeof alphaNumeric)

//2. Every Method
//Syntax: Array.every(callbackFunction)
//Usage: Takes a callback function and tests for each element in
//array and returns whether that element exists by help of bool
//It only returns bool value

//Notes:
//1. For the callback function in every method we have set of
//  parameters to be passed element, index

var everyResult = [12, 10, 33].every(// Every func iterates every element in an array
    function  isBigEnough(element){
        return element >=20
    }
)
//If everything is false, everything is false in "Every method"
console.log(`Every Method Element: ${everyResult}`)

var everyResult = [12, 13, 33].every(element => element >= 10)
console.log(`Every Method Element: ${everyResult}`)

var everyResultIndex = [12, 13, 33].every((element, index) => index <= 3)
console.log(`Every Method Index: ${everyResultIndex}`)

//3. Filter Method
//Syntax: Array.filter(callback(element, Index))

var filterResult = [12, 5, 8, 33, 23, 44].filter((element) => element >= 20)
console.log(`Filter Result Element: ${filterResult}`)

var filterResultIndex = [12, 5, 8, 33, 23, 44].filter((element, idx) => idx >= 20)
console.log(`Filter Result Index: ${filterResultIndex}`)

//4. For Each Method
//Syntax: Array.forEach(callback(element, index))

var nums = new Array(12,13,14,15)
var forEachResult = nums.forEach((element, idx) => {
    console.log(`For Each Method Element: ` + element >=13)
    console.log(`For Each Method Index: ` + idx > 2)
})

//5. Reverse Method
//Syntax: Array.reverse()

var reverseArray = nums.reverse()
console.log(`Printing the reversed Array: ${reverseArray}`)

//6. Index of Method
//Syntax: Array.indexof(element)

var indexofArray = [12, 5, 8, 130, 44].indexOf(130)
console.log(`Index of Method: ${indexofArray}`)

//7. Join Method
//Syntax: Array.join(seperator)

var joinArray = new Array("First", "Second", "Third")

var stringJoin = joinArray.join("=>")

console.log(`Join Method: ${stringJoin}`)

//8. Last Index of
//Syntax: Array.lastIndexof(element)

var indexofLastEleemnt = [12,5,8,9,130,44,4].lastIndexOf(44)
console.log(`Last Index of Method: ${indexofLastEleemnt}`)

//9. Map Method
//Syntax: Array.map(callback(element, index))

let arrayForMap = [1, 2, 3, 4, 5]

let newArrayForMap = arrayForMap.map((element) => element * 2)

console.log(`Map Method: ${newArrayForMap}`)

//10. POP Method
//Syntax: Array.pop()
//Pops the last element in the array

let student = ["William", "John", "Chris", "Mike"]
let newstudent = student.pop()
console.log(`POP Method: ${newstudent}`)

//11. Push Method
//Syntax: Array.push()

let stringArray = ["Jhonny", "Peter", "Sammy"]
let newArrayIndexToPush = stringArray.push("Larry")
console.log(`PUSH Method: ${stringArray}`)
console.log(`PUSH Method: ${newArrayIndexToPush}`)

//12. Reduce Method
//Syntax: Array.reduce(callback(left,right))

let reduceNumber = [1, 1, 2, 3, 4].reduce((a,b) => a * b)
// => 4*1 + 1*2 + 2*3 + 3*4 => 4 + 2 + 6 + 12 => 24
console.log(`Reduce Method: ${reduceNumber}`)

//13. Reduce Right Method
//Syntax: Array.reduceRight(callback())

var reduceRightNumber = [0, 2, 1].reduceRight((a, b) => a-b)
//0-2 = -2 => -2+1 = -1
console.log(`Reduce Right Method: ${reduceRightNumber}`)

//14. Shift Method
//Syntax: Array.shift()

var shiftNumber = [10, 20, 30, 40, 50]
//Removes First Element
const newShiftNumber = shiftNumber.shift()
console.log(`Shift Method: ${shiftNumber}`)
console.log(`Shift Method: ${newShiftNumber}`)

//15. Slice Method
//Syntax: Array.slice(numberofelements)

var sliceItems = ['cup', 'house', 'spoon', 'plate']
var newSliceItems = sliceItems.slice(1)
console.log(`Slice Method: ${newSliceItems}`)
//Start and End Element Number
var newSliceItems2 = sliceItems.slice(2, 3)
console.log(`Elements Start and End Slice: ${newSliceItems2}`)

//16. Splice Method
//Syntax: Array.splice(startIndex)

var splicedItems = [1, 2, 3, 4, 5]

//Delete 2 from the array
var deletedSlicedItems = splicedItems.splice(1, 4)
console.log(`Spliced Items: ${deletedSlicedItems}`)

//17. Unshift Method
//Syntax: Array.unshift(newElement)
//It always start from the begining

var unshiftArray = [0,0,5,1,2,3,4,5]
var newUnshiftArray = unshiftArray.unshift(22,33)
console.log(`Unshift Method: ${unshiftArray}`)

//18. Some Method
//Syntax: Array.some(callback(element, index))
//Some Method test whether the element in the array

var someRetrval = [2,5,8,9,4,10].some(element => element >= 10)
console.log(`Some Method: ${someRetrval}`)

//19. Sort Method
//Syntax: Array.sort()

var sortArray = new Array('a', 'b', 'c', 'd', 'e')
var sortedArray = sortArray.sort()
console.log(`Sort Method: ${sortedArray}`)

//20. toString Method
//Syntax: Array.toString()

var arrayToConvert = new Array(1,2,3,4)
var stringArrayConverted = arrayToConvert.toString()
console.log(`toString Method: ${stringArrayConverted}`)

//21. Find Method
//Syntax: Array.find(callback())

var findNum = [2,3,4,1,5]
var oddNum = (findNum.find(element => element%2 == 1))
console.log(`Odd Number using Find Method: ${oddNum}`)

//22.Array Destructuring

var arrayDestruct = [1,2,3,4,5]
var [x,y,z,u,a] = arrayDestruct
console.log(a)

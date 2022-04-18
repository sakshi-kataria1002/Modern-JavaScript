//FUNCTIONS

hoist() // Function Hoisting- Function is taken to the top

// 1. GENERAL FUNCTION EXPRESSION

// let a = 10 a = identity, let = category
// function generalFunctionExpression(1, 2) {} 
// function is a category with an identity generalFunctionExpression

//let a = 10    // Basic Function
//console.log(a)

function generalFunctionExpression(){ //General Function
    let a = 20
    console.log("Value of generalFunctionExpression: " + a)
} // Function Definition

generalFunctionExpression() // Function Call
//generalFunctionExpression()
//generalFunctionExpression()
//generalFunctionExpression()
//generalFunctionExpression()

// 2. RETURNING FUNCTIONS
function returningFunction() { //Returning Functions
    let b = 1234
    return b
}// Function Definition
let c = returningFunction() // Functional Call
console.log("Value of returningFunction: " + c)

//let d = 40    // Basic Function
//console.log(d)

// 3. PARAMETERIZED FUNCTIONS
// PASS BY VALUES
function parameterizedFunctions(c = 10, d =11){
    c = 25
    d = 25
    let a = c
    let b = d
    return a+b
}
let e = parameterizedFunctions() //Function Call
console.log("Value of parameterizedFunctions: " + e)

// PASS BY VALUES
function parameterizedFunctions2(c, d){
    return c + d
}// Function Definition
let f = parameterizedFunctions2(10, 12) //Function Call
let g = parameterizedFunctions2(40, 11)
let h = parameterizedFunctions2(5, 35)
console.log("Value of parameterizedFunctions2: " + f)
console.log("Value of parameterizedFunctions2: " + g)
console.log("Value of parameterizedFunctions2: " + h)

// PASS BY REFERENCE
function parameterizedFunctions3(c, d){
    return c + d
}// Function Definition
let k = 10
let l = 14
let i = parameterizedFunctions3(k, l) // Function Call
console.log("Value of parameterizedFunctions3: " + i)

// 4. DEFAULT FUNCTION PARAMETERS
function defaultFunctionParameter(a = 10, b = 15){
    return a + b
}
let m = defaultFunctionParameter(4, 3) //Function Call
console.log("Value of defaultFunctionParameter: " + m)

function defaultFunctionParameter2(a = 8, b = 5){
    return a + b
}
let n = defaultFunctionParameter2(6) //Function Call
console.log("Value of defaultFunctionParameter2: " + m);

// ANONYMOUS FUNCTIONS

(function (){
    console.log("Anonymous Function")
    console.log("Multi Statements")
})() // Function Call => Immediatelt Invoked Function Expression

let anonymous = function (){
    let a = 10
    let b = 11
    console.log("Anonymous Function printing a: " + a)
    console.log("Multi Statements: " + b)
}
anonymous()

// LAMBDA FUNCTION/ ARROW FUNCTION/ ANONYMOUS FUNCTION

let lambdaFunction = () => {
    let b = 11
    console.log("Lambda Function")
    return b
}
lambdaFunction()

let lambda2 = a => console.log(a)
lambda2(2)

let lambda3 = a => 10
console.log(lambda3())

let lambda4 = (a, b) => 25
console.log(lambda4())

// CALL BACK FUNCTIONS
// Passing Function as a parameter in CALL BACK FUNCTIONS
function parentFunction(funSMS, funEMAIL){
    console.log("Starting Parent Function")
    funSMS() // Function Call
    funEMAIL() // Function Call
}// Function Definition of Parent Function

//Function Call of Parent Function
parentFunction(
    function(){
        console.log("Sending SMS")
    },
    function(){
        console.log("Sending EMAIL")
    }
)
// Variable Hoisting => All the declarations are taken to the top

// Function Hoisting

//hoist() // Function Call

function hoist(){
    console.log("Hoisting Function")
    return 10
}

// Rest Parameterized Function
//function restParameterized(a, b){
//    console.log("Display Params: " + a + "" + b)
//}
//restParameterized("hello", "world")

function restParameterized2(...parameter){
    console.log("Display Params: " + parameter)
}
restParameterized2("hello", " world", " how", " are", " you")
restParameterized2(1, 2, 3, 4, 5, 6, 7, 8, 9)

// Recursive Function
// 5! = 1 * 2 * 3 * 4 * 5 = 120
function factor(num){
    if(num <= 0){
        return 1
    }
    return num * factor(num - 1)
    // 5 * factor(5 - 1){
    // 4 * factor(4 - 1){
    // 1 * factor(1 - 1){
        1
    //}
    //}
}
console.log(factor(5))

// CALL BACK FUNCTION
function parent(child1, child2){
    child1()
}
parent(
    function display(){
        console.log("Displaying some text")
    }
    , 12)

function add(){
    console.log("Add Function")
}
add()

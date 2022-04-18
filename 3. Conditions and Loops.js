// CONDITIONS
//IF, IF ELSE, NESTED IF, SWITCH

// Syntax:
// if(expression) => bool evaluated
let a = 10
if(a === 10){
    console.log(true)
}

// if(expression) else {} => bool evluated
if(a === 10){
    console.log(true)
} else{
    console.log(false)
}

// Used for only the single statement
console.log(a === 10 ? true: false)

// Nested If
let b = "12"
if(a === 10){
    if(b === 12){
        console.log("Printing b: " + b)
    }
    console.log("Printing a: " + a)
}

//Switch

switch(a){
    case 10: 
        console.log("Printing first case in switch: " + a)
        break;
    case 11: 
        console.log("Printing second case in switch: " + a)
        break;
    default:
        console.log("Printing default case in switch: " + a)
        break;
}

// LOOPS
// FOR, FOR IN, FOR OF, WHILE, DO WHILE

//NOTE: console.log(c) // If we give this statement for printing c before initializing c, then var will give undefined as output and 
//let will give an error as output, that's why we are using "let"

// Syntax:

// FOR loop
// for(initialization  statement; expression; update statement) {}
//console.log(c) // Check the NOTE above
var c = 11 
for(let i = 0; i < c; ++i){
    console.log("Printing FOR loop: " + i)
}
 
    // FOR IN loop
    let obj = {
        fname: 'Sakshi',
        lname: 'Kataria',
        empcode: 11246
    }
    for(var key in obj){
        console.log(obj[key])
        //console.log(i)
    }

    // FOR OF loop
    var arr1 = [1, 2, 3, 4, 5]
    for(var indexPosition of arr1){
        console.log(indexPosition)
    }

// WHILE loop
// Synatx: while(expression ){statements}

// Step 1: let j = 0
// Step 2: Condition j < 10
// Step 3: console.log(j)
// Step 4: update statement j++
let j = 0
while(j < 10){
    console.log("Printing j: " + j)
    j++
}

// DO WHILE loop
// Step 1: Initialization
// Step 2: Execute statements inside do block
// Step 3: Check condition
let r = 0
do{
    console.log("Printing r:" + r)
    r++
}while(r < 10)

//let r = 1
//do{
//    console.log("Printing r:" + r)
//    r++
//}while(r < 1)

// ASSIGNMENT => Difference between FOR and WHILE Loop
//(12/04/2022)

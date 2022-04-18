// SYNCHRONOUS FUNCTIONS

function firstFunction(){
    console.log("First Function")
}

function secondFunction(){
    console.log("Second Function")
}

function thirdFunction(){
    console.log("Third Function")
}

function fourthFunction(){
    console.log("Fourth Function")
}

function fifthFunction(){
    console.log("Fourth Function")
}
 
firstFunction()
secondFunction()
setTimeout(thirdFunction, 2000) //It will wait for 2 milliseconds
//setTimeout( () => console.log("Third Function"), 3000)
fourthFunction()

// ASYNCHRONOUS FUNCTIONS
// Because it is printing fouth function first instead of printing third function first.

firstFunction()
secondFunction()
//setTimeout(thirdFunction, 2000) //It will wait for 2 milliseconds
setTimeout( () => console.log("Third Function"), 3000)
fourthFunction()

// Function 1 => print some message weather application => no delay of time
// Function 2 => google map api => lat, long of a location delhi => delay of time
// Function 3 => lat, long => predict some weather => no delay of time
// Function 4 => display that weather to the console => no delay of time

// Function1() => weather application
// Function3() => no calculation
// Function4() => no display
// Function2() => there is no use

//EVENT LOOP MECHANISM
// Event loop, Event queue, Call stack
//function a(num){
//    return b(num)
//}
//function b(num){
//    return c(num)
//}
//function c(num){
//    return num
//}
//d = a(2) // JS is processing a event

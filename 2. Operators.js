// Arithmetic Operators
// [+. -. *, /, %, ++, --]

var a = 10
var b = 11
//output = left operand(a) operator(+) right operand(b)
var c = a + b
console.log(c)
c = a - b
console.log(c)
c = c / b
console.log(c)
c = c * b
console.log(c)
c = a % b
console.log(c)

c = a++ //Post Increment
console.log(c)
c = ++a //Pre Increment
console.log(c)
c = a-- //Post Derement
console.log(c)
c = --a //Pre Decrement
console.log(c)

// Reational Operators
// [==, ===, <=, >=, !=]

//var d = 10
//if(d == 10){
//    console.log(true)

var d = 10
var e = 12
if(d != e){
    console.log(true)
}
else{
    console.log(false) 
}

// Logical Operators
// [&&, ||, !]

var f = 125
var g = 122
if( !(f || g == 125)){
    console.log(true)
}
else{
    console.log(false)
}

// Bitwise Operators
// [&. |, ^, ~, <<, >>, >>>]

//AND[&]
var h = 10
var i = 11

//Convert then into bits
// h => 1010 => 10
//1 => 2^3, 0 => 2^2, 1 => 2^1, 0 => 2^0 => 8+2 = 10
//i => 1011 => 11
// 1 => 2^3, 0 = >2^2, 1 = >2^1, 1 = >2^0 => 8 + 2 + 1 = 11

// & AND Operator
// 1010
// 1011
// ----------
// 1010 => 10
var j = h & i //Output is 10
//var j = h | i //Output is 11
console.log(j)

// ^ XOR Operator
// 1010 => 10 => h
// 1011 => 11 => i
// ----------------
// 0000 => 2^0 => 1
var k = h ^ i
// 0001
console.log(k)

// ~ Negation Operator

//var l = 10
//console.log(~l)

var l = -10
console.log(~l)

// << Left Shift Operator

var m = 10
//m => 1010 => 0001 0100
//m << 1
//console.log(m)

n = m <<3
n = m >>2 // => 1010 => 0010
console.log(n)

// >>> Zero Fill Right Shift Operator => ASSIGNMENT

// Assignment Operators
// [=, +=, -=, *=, /=, %=, &=, |=]

var o = 132
var p = 10
o += p
console.log(o)

// Miscileaneous Operators
// [typeof, ?:]

// ?: Condition Operator

var q = 10
var r = (q == 10 ? 11 : 14)
console.log(r) // Output is 10

//var q = 10
//var r = (q == 10 ? 11 : 14)
//console.log(r) // Output is 14

var s = "11"
console.log(typeof(s))

//ASSIGNMENT => Zero Fill Right Shift Operator
//(11/04/2022)

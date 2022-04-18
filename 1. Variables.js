//Variables

//Syntax: category-> var, identity-> a, operator-> =, value-> 10
//Characteristics: You can store a value, 
//You can change the value that is stored, 
//You can store only specific data types

var a = 10
a = 11
console.log(a)
console.log(a)

//Data Types

//PRIMITIVE DATA TYPES
    //1. Numeric Data Types/ Number Data Types
    var b = 15
    //2. String/ Character Data Types
    var c = "hello world"
    var d = 'h'
    var e = 'dcbhdsbfb'
    //3. Boolean
    var f = true
    //4. Undefined
    var g = undefined
    var h 
    //5. Null
    var i = null

//NON-PRIMITIVE DATA TYPES
    //6. Object-> Unstructured Data
    var j = {
        empName:'Sakshi Kataria',
        empCode: 11246
    }
    console.log(j.empCode)
    //console.log(j.empName)
    //7. Arrays-> Structured Data
    var k = [1, 3, 7, "Something", 9]
    // 1-> 0, 3-> 1, 7-> 2, Something-> 3, 9->4
    console.log(k[3])

//SCOPE OF VARIABLES

    //1. Gloabl Scope
    var l = 56
    function print(){
        console.log(l)
    }
    print()
    //2. Local Scope/ Functional Scope
    function localScope(){
        var m = 123
    }
    //console.log(m)
    
    //3. Block Scope
        //Declaration
        var o //Declaring the identity of o as variable 
        o = 48458 //Initializing the value to o
        var p = 547857 //Definition

        //Variable Hoisting
        console.log(n)
        var n = 8758
        //All the declarations will be taken to the top->Variable Hoisting

        if(a == 12){ // Comparing whether a is equals to q or not
            var q = 20
        }
        console.log("Value of q is: " + q) // Value of q is: undefined ->This is Variable Hoisting becaue it is giving undefined value to q as output

        //if(a == 11){ // Comparing whether a is equals to q or not
        //    var q = 20
        //}
        //console.log("Value of q is: " + q) // Value of q is: 20

        // Block Scope Variables: let and const
        // Block Scope Variables prevents Variable Hoisting
        {
            let r = 34
            console.log(r)
        }
        //console.log(r) //It will give an error but not undefined as output and prevent variable hoisting

        {
            const s = 34
            //s = 5678687
            console.log(s)
            //Note: You need to give defintion for const no decalartion
            const t = 27616 //This will not be printed
        }
        //Temporal Dead Zone: ASSIGNMENT FOR TODAY(11/April/2022)

    //4. Lexical Scope
    //It will check the scope of "u" in this manner:
    //lex2 block -> lex1 block -> global variable block
    
    var u = 89  // Global Variable

    function lex1(){
        //var u = 76
        console.log(u)
        function lex2(){
            //var u = 178
            console.log(u)
        }
        lex2()
    }
    lex1()

console.log("10" + 10)
console.log("10" + "10")
console.log("10" - "10")
console.log("10" - "5")

//ASSIGNMENT => Read about TEMPORAL DEAD ZONE
//(11/04/2022)

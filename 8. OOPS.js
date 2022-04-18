// OBJECT-ORIENTED PROGRAMMING

// CLASS
// Class is just a category
// Class is a set of rules

class ES6{
    // This is a default constructor
    //ES6(){
    //    this.add()
    //    this.multi()
    //}
    // Constructor holds the property
    constructor(c, d){
        this.a = c
        this.b = d
    }
    add(){
        var c = this.a + this.b
        return c
    }
    multi(){
        var c = this.a * this.b
        return c
    }
}

// OBJECTS

var obj1 = new ES6(10, 2)
console.log(obj1.add()) // Output -> 12
console.log(obj1.multi()) // // Output -> 20

var obj2 = new ES6(3, 4) 
console.log(obj2.add()) // Output -> 7
console.log(obj2.multi()) // // Output -> 12

// ASSIGNMENT => Change the "+"" operator in add() function to "*"" using object

// INHERITANCE

    // Single Inheritance
        class A{ //Parent Class
            add(){
                console.log("Class A function add")
            }
        }
        class B extends A{ // Derived Class from Class A
            multi(){
                console.log("Class A function multi")
            }
        }
        
        var obj3 = new B()
        obj3.add() // It will print "Class A function add"

    // Multilevel Inheritance
    class C extends B{
        div(){
            console.log("Class A function div")
        }
    }
    var obj4 = new C()
    obj4.add() //// It will print "Class A function add"

    // Hierichal Inheritance
    class D{
        display(){
            console.log("Class A function display")
        }
    }
    class E extends D{

    }
    class F extends D{

    }
    class G extends D{

    }
    var obj5 = new G()
    obj5.display() // It will print "Class A function display"

// METHOD OVERRIDING
class I { // Parent Class
    display1(a = 10, b = 11) {
        console.log("Display Function in I: " + (a+b))
    }
}
class J extends I{ // Derived Class
    display1 = (a = 12, b = 14) => {
        console.log("Display Function in J: " + (a+b))
    }
    IclassMethod(){
        super.display1()
    }
}

var obj6 = new J()
obj6.display1(1, 2) // It will print "Display Function in J: 3"
obj6.IclassMethod() // It will print "Display Function in I: 21"

// METHOD OVERLOADING
class K{
    display2(a, b, c){
        console.log("First Function")
    }
    display2(a, b){
        console.log("Second Function")
    }
    display2(a){
        console.log("Third Function")
    }
}

var obj7 = new K()
obj7.display2() // It will print "Third Function" by default
obj7.display2(1, 2, 3) // In JS it will still print the "Third Function" no matter what

// ENCAPSULATION
// ABSTRACTION
// INTERFACE

// STATIC METHODS

class checkingStatic{
    static display3(a){
        console.log("Checking some text: " + a)
    }
}
//Static methods are called using the class name and function name
//We can't call the static methods using objects
checkingStatic.display3(10)
checkingStatic.display3(12)
checkingStatic.display3(14)
checkingStatic.display3(16)

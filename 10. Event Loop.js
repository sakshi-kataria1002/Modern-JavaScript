// EVENT LOOP MECHANISM ASYNCHRONOUS
//Table Example Asynchronous Event Mechanism

//Restaurant

function enterRestaurant(){
    console.log("Enter MacD")
}

function exitRestaurant(){
    console.log("Exit MacD")
}

function takeOrder(order){
    return order
}

function kitchen(serving){
//Use back tick operator to return concatinate string and variable together
   //return `Serving Dish: ${serving}`
   setTimeout(() => console.log(`Serving Dish: ${serving}`, 2000))
}

let table1 = takeOrder // Function Call executing it
kitchen(table1("pasta"))// Call Back
//console.log(kitchen(table1('pasta')))
enterRestaurant()
exitRestaurant()

//loops


// for(statement1; statement2; statement3)  //statement 1 = initialization, what we start loop with, statement 2 = condition - stopping point, statement 3 = increment or decrement
// {

// }

//for loop (for i loop)
for(let i=0; i<5; i++){
    console.log("hello world" + i)
}

var cars = ["Toyota", "Honda", "Ford"]
//for of loop
for(let car of cars){  //car is a variable that will hold the value of each element in the array, we made it up now
    console.log(car)
    if(car === "Honda"){
        console.log("I found Honda")
        break
    }
}

//ES6 syntax for each loop
cars.forEach( car => {
    console.log(car)
})


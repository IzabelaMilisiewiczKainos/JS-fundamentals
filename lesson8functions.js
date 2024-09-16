//functions are used to organize a code into reusable blocks

helloOne()  
//declarative function - it can be called earlier in the code than it is defined
function helloOne(){
    console.log('Hello one!')
}

helloOne()  //function is ready to be executed

//anonymous function
var helloTwo = function(){  //it doesn't have a name in fuction, it is stored in a variable
    console.log('Hello two!')
}

helloTwo()

//ES6 function syntax or arrow function
var helloThree = () => {   //parenteces are definition of the function, arrow is the body of the function
    console.log('Hello three!')
}

helloThree()

//function with arguments
function printName(name, lastName){
    console.log(name + ' ' + lastName)
}

printName('John', 'Smith')


//function with return value - you can keep function in one place and call it in the other place
function multiplyByTwo(number){
    var result = number * 2
    return result
}

var myResult = multiplyByTwo(5)
console.log(myResult)

//importing functions from other files

//1 way
import { printAge } from '../helpers/printHelper.js'
printAge(25)

//2way
//import everything 
import * as helper from '../helpers/printHelper.js'
helper.printAge(35)   //filename.functionName

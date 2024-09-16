//Concatination and Interpolation
var price = 50
var itemName = "cup"
var messageToPrint = "The price for your " + itemName + " is " + price + " dollars" //Concatination
console.log(messageToPrint)
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars` //Interpolation
console.log(messageToPrint2)
//the effect is the same but syntax is different, interpolation istypical for JS, it is more readable and easier to use

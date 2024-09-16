//strict data types reduces the number of errors in your code

var customerFirstName = "John" //typescript prevents us from assigning different value types to the same variable in JS you can do it
var customerLastName: string = "Doe"
var customerAge = 25


//you can create your own types
type Customer = {firstName: string, lastName: string, age: number, active: boolean}

//var firstCustomer: Customer = 100 //this will give an error because the type is not correct

var firstCustomer: Customer = {firstName: "Mary", lastName: "Doe", age: 25, active: true} // it has to have the same properties as the declared above in line 7 type


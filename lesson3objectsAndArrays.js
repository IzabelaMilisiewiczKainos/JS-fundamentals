//objects - we need them to store multiple values at the same time - key and vallue separated with comma in {}
var customer = {
    firstName: "John",
    lastName: "Smith",
    age: 25,
    isMarried: false,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
}

console.log(customer)
console.log(customer.firstName) //dot notation, more common
console.log(customer['lastName']) //bracket notation, not common
customer.firstName = "Jane" //changing value

console.log(`${customer.firstName} lives in ${customer.address.city}`) //interpolation
console.log(customer.firstName + ' lives in ' + customer.address.city) //concatination

//arrays - list of items that are stored in a single variable - exact order of the values, called  index, array can be part of an object, it can be value or a key
var cars = ["Toyota", "Honda", "Ford"]
console.log(cars)
console.log(cars[0])
cars[1] = "BMW" //changing value
console.log(cars[1])
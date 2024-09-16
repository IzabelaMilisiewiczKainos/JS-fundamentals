//logical "AND"
console.log(true && true); // true - ALL conditions are true

//logical "OR"
console.log(true || false); // true - ANY of the conditions is true

var ageIsMoreThan18 = true
var isUSCitizen = false

var eligibilityForDriving = ageIsMoreThan18 || isUSCitizen
console.log("This customer is eligible for DL: " + eligibilityForDriving)

//logical "NOT"
console.log(!true); // false - reverse the value
console.log(!false); // true
console.log(6 == 10); // false - 6 is not equal to 10
console.log(6 !== 10); // true - 6 is not equal to 10



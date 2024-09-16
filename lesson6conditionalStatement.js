//conditional statement - is needed when you want to split the flow of your operation on defined conditions

//if(condition){
    //exacute this code if condition is true
//}
//else{
    //execute this code if condition is false
//}

//example
//if hour between 6 and 12 print "Good morning"
//if hour between 12 and 18 print "Good afternoon"
//otherwise "Good evening"

var hour = 12

if(hour >= 6 && hour < 12){
    console.log("Good morning")
}
else if(hour >= 12 && hour < 18){
    console.log("Good afternoon")
}
else{
    console.log("Good evening")
}

var ageIsMoreThan18 = true
var isUSCitizen = false

if(ageIsMoreThan18 && isUSCitizen){
    console.log("This customer is eligible for DL")
}
else{
    console.log("This customer is not eligible for DL")
}
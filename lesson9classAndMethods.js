import { customerDetails } from "../helpers/printHelper.js";

//class is another form of absrtaction, it is a blueprint for creating objects, used to organize code into reusable blocks, class name starts in capital letter

//var customerDetails = new CustomerDetails()  //I have to create an instance of the class to use it, var is our object and customerDetails is the instance of the class
//OR it cam be implemented in printHelper.js file

customerDetails.printFirstName('John')  //I can use the method from the class
customerDetails.printLastName('Smith')  
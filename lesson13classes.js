//create page class (partent)
class Page {
    constructor(url, content) { //special method that is called when a new instance of the class is created, there can be only one constructor in a class
        this.url = url;
        this.content = content;
    }
    open() {   //when we are creating methods in a class we don't need to use the function keyword
        console.log('opened page', this.url);
        console.log(this.content);
    }

    refresh() {
        console.log('refreshed page', this.url);
    }
}

//create a ContaktPage child class (child)
class ContactPage extends Page {   //uses everything from the parent class
    constructor(url, title) {
        super(url, title)  //super is used to call the parent constructor
        this.title = title
       }

       open() {
        console.log('opened contact page', this.url, "with title", this.title);
        console.log(this.title)}  //overwrites the parent method

        get loginBtn()   //getter method, it is a method that gets the value of a property, it is used to access the properties of an object
        {
            console.log('login btn selector')
        }
    }

    class AboutPage extends Page {}    
    
//Create an instance of Page class
const page1 = new Page('www.google.com', 'Google search engine')
console.log(page1.url)
page1.open()

const page2 = new Page('www.wp.com', 'information about wordpress')
console.log(page2.url)
page2.open()
page2.refresh()

//Create an instance of ContactPage class
const contact = new ContactPage ("www.facebook.com", 'Facebook')
contact.open()
contact.loginBtn
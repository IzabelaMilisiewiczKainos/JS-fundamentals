//callback and promises allows you to work with async code

//callback function
//example 1
// import request from 'native-request';

// console.log('fetching data - started')
// const getTodos = () => {
//     request.get('https://jsonplaceholder.typicode.com/todos/1', 
//     (error, data) =>{ console.log(data)  //callback function
//     console.log('fetching data - completed')})  
// // another action we want in scpecific order
// }

// getTodos()

//example 2
const users = ["user1", "user2", "user3"]
const getUsers = () => {
            setTimeout(() => {
                users.forEach(user => {
                    console.log(user);
                });
        }, 1000);
    };

    const createUser = (user, callback) => {
        setTimeout(() => {
            users.push(user)
            callback()  //callback function, waits for the first function to finish
        }, 2000);
    }

    createUser("user4", getUsers);

    
    //Promises helps us to handle callback in cleaner way
    import request from 'native-request';

    console.log('fetching data - started')
    const getTodos = () => {
        return new Promise((resolve, reject) => {
            request.get('https://jsonplaceholder.typicode.com/todos/1', 
                (error, data) =>{ 
                    if(error) reject(data)
                    resolve(data)
                })  
            })  
    }
    
    getTodos()
    .then(response => console.log(response))
    .catch(error => console.log(error))

    
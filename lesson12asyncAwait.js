//when you pass an ASYNC keyword to a function, it returns a promise and the AWAIT keyword is used to wait for the promise to resolve
//before moving on to the next line of code
//async await is a cleaner way to handle promises
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

const getAPI = async () => {   //we always use async keyword with await, await keyword is used to wait for the promise to resolve, used instead od .then()
   const res = await getTodos()
   console.log(res)
    console.log('fetching data - completed')
}

getAPI()

// getTodos()
// .then(response => console.log(response))
// .catch(error => console.log(error))


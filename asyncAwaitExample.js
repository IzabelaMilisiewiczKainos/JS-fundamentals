// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(response => response.json())
// .then(json => console.log(json))

// async function for the same purpose as above
const getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const json = await response.json()
    console.log(json)
}

await getTodos()
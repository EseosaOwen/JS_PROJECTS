// ========== Asynchronous Programming
// This is a piece of code that is going to run out of order, happening at a random time

// ===== So when dealing with real world data, eg API request its going to be returned as a promise


const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // This code is randomly picking either true or false
        isReady = [true, false][Math.floor(Math.random() * 2)]
        // Ternary operator
        // This carries three parameters per say,the condition, True and False
        isReady ? resolve("Soup is ready"):reject("No soup today")
    //  Condition           Runs if true        Runs if false
    }, 1000) 
})

//====RESOLVED - if waiter brings soup, tip the waiter, you pay for soup
// ====REJECTED - leave a bad review, no tip

//========== Promise works with setTimeout and .then, after the above code if we console.log a promise it would just display an object called promise, what we want to do with this promise code is create a function that would display after a certain period of time using the promise class, so to display its content we use a .then, .then helps us pass the parameter value and then console.log that value, which is the soup is ready.

//===== first the promise starts(pending) next the promise displays the output after the specified period of time.

// ========  When using ternary operators the reject never runs, if it tries to run it will launch an error, if we want to prevent that then we need to add a catch for the error. In this case we changed te isReady from true to false, and it ran.

// here we are receiving the response and then console logging that response, unkike for the API were we had to parse it to json first then received the parse response.

// =============== Retrieving from Promise1 using .then =================
// console.log(
//     promise1.then(response => console.log({response}))
//     .catch(response => console.log({response}))
//     )
 
// ================ Fetching from the Dog API using  .then =====================
// console.log("fetch:", 
// fetch('https://dog.ceo/api/breeds/image/random') // promise
// .then(response => response.json()) // promise(response from the API)
// .then(data => console.log(data))) // displaying the value of the promise


// NOTE: just like the API requests the .then helps to retrieve a value from this Promise, in the DogAPI is helped to retrieve the request made.

// Note: The Catch is actually catching the reject so anytime i want to use a promise and with ternary operators i need to do a .then and also a catch.


// ////// ======================================= ASYNC/ AWAIT =========================================== ///////////
// Whenever i think API request, think async functions, whenever i want to do a fetch request, think async functions, whenever i want to do a post request think async functions, retrieving from a databas still async functions

// Rules for using async / await
//  1. You must create a function
//  2. You must use the keyword async
//  3. Use the word await

// ======== Fetching from the Dog API using  .async
const getDog = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random'
    const response = await fetch(url)
    const data = await response.json();
    console.log(data)
}

getDog()


//============== Retrieving from  promise1 using async/await ==============
// ====== method 1 
// const getSoup = async () => {
//     try{
//     const soup = await promise1;
//         console.log(soup);
//         setTimeout(()=> {
//             console.log("Have a tip");
//             console.log("pay for soup")
//         }, 3000)   
//     }
//     catch(error){
//         console.log(error)
//         setTimeout(()=> {
//             console.log("This is a bad restaurant");
//             console.log("Bye im leaving")
//         }, 3000)  
//     }
// }

// ====== method 2
const getSoup = async () => {
    const data = {rating: null, tip: null, pay: null, review: null}
    try{
    const soup = await promise1;
        console.log(soup);
        data.rating = 5
        data.tip = .2
        data.pay = 10
        data.review = 5
        return data
    }
    
    catch(error){
        console.log(error);
        data.rating = 1
        data.review = 1
        return data
    }
}

//  ////======== NOTE: Whenever you want to return anything from an async function, you have to use a .then, because an async function is also a promise.
getSoup().then(value => console.log(value));

const sum = async (a, b) => a + b

sum(3, 4).then(value => console.log(value));

const getValue = async () => {
    const value = await sum(2, 4);
    console.log(value)
}

getValue()
// ============= RETERIVING FROM A PROMISE ==================
// When retrieving from a promise you either use ASYNC/await or .THEN
// It is advised to use async/await instead of .thens, since its makes the code simpler and neater, if there are any errors, they can be caught using the try and catch block, unlike for .then which uses the .catch method/function
// In ternary functions the try and catch mean a few things, the try is the resolve, while the catch is the reject, so if you want to get the value of the reject you need to add a try and a catch, the catch carries like an error or false parameter.


// NOTE: try to check if .then is the same as async in not being able to return a data
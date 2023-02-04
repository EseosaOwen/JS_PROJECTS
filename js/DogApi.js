// // https://dog.ceo/api/breeds/image/random 
// // .then is like saying once a particular data gets resolved it returns to us a javascript promise, so the .then is saying once we get that data then i want to turn that data into something, in this example we are turning it into JSON and then console.log that particular JSON, the .then should be used anything i need to do an API request or a fetch

// //  JSON in this case turns the data into an object format

// // What this code is saying is that im fetching a particular information from this API and then i get the response, and then im returning that response.json , get the json and then console logging that json


// // Synchronous programming: means that the code runs line by line
// // Asynchronous programming: When you deal with getting data from somewhere else, like a third party website etc, meaning the code wouldnt run line by line


// // let dogImageDiv = document.getElementById("dogImage");
// // let dogButton = document.getElementById("dogButton");

// // let randomDog = () => {
// //     fetch('https://dog.ceo/api/breeds/image/random')
// //     .then(response => response.json())
// //     .then(json => {
// //     dogImageDiv.innerHTML = `<img src="${json.message}" height="300" width="300"/>`
// // })
// // }

// const dogImageDiv = document.getElementById('dogImage')
// const dogButton = document.getElementById('dogButton')

// // stuff you have to wait for
// const getNewDog = () => {
//   fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(json => {
//       dogImageDiv.innerHTML = `<img src='${json.message}' height=300 width=300/>`
//     })
// }

// dogButton.onclick = () => getNewDog()

// // dogButton.onclick = () => randomDog()

// // dogButton.addEventListener("click", () => randomDog())



// // Anything that i will need to wait a few seconds for, i should use .then

function greeting(name) {
  const date = new Date();
  const hours = date.getHours();
  let time;
  if(hours > 4 && hours < 12){
      time = "Morning";
  }

  else if(hours > 12 && hours < 17){
      time = "Afternoon";
  }

  else if(hours > 17 && hours < 20){
      time = "Evening";
  }
  else{
      time = "Night";
  }
  const greeting = `Good ${time}, ${name}`
  return greeting; 
} 


console.log(greeting("Eseosa"));

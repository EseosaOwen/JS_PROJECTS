// const options = {
// 	method: 'POST',
// 	headers: {
// 		'X-RapidAPI-Key': 'bb27973180msh77b212db136d47dp15554ejsn21bb7960712d',
// 		'X-RapidAPI-Host': 'openweatherapp.p.rapidapi.com'
// 	}
// };

// fetch('https://openweatherapp.p.rapidapi.com/', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));





let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

const getApidata = async (city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    const response = await fetch(FULL_URL);
    const data = await response.json();
    return data;
    // const response = fetch(FULL_URL);
    // return response.then(data => {
    //     return data.json()
    // })
}

// We have the getValue() because the getAPiData just gets us accepts our request and holds the value, but to get the value since we are returning we need a .then, so we create a function that will call the getApidata and do a .then on it, to get the value and also because we need to get the user input, so we create a function which will handle that and will run the whole code.

const getValue = () => {
    cityInput = document.querySelector(".cityInput").value;
    getApidata(cityInput).then(data => {
        showWeatherInfo(data);
    }).catch(err => console.log(err, "this should not be happening"));
}

// this function displays the weather information based on the location

const showWeatherInfo = (data) => {
    const weatherMain = document.querySelector(".weatherMain");
    weatherMain.innerHTML = `<h2>${data.weather[0].main}</h2>`
}



// Parameters make a function dynamic, if you dont have paramters that the function will just be re-usable but will be static.





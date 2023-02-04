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

let apiKey = 'bb27973180msh77b212db136d47dp15554ejsn21bb7960712d';

const parseApiData = async () => {
    // let response = await fetch(`https://openweatherapp.p.rapidapi.com/?q=${city}&appid=${apiKey}`);
    const url = 'https://openweatherapp.p.rapidapi.com/'
    let reponse = fetch(`${url}`)
}
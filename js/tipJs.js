let billTotal = document.querySelector("#billTotal");
let TipAmount = document.querySelector("#tipAmount");
let people = document.querySelector(".people");
let addBtn = document.querySelector(".addBtn");
let minusBtn = document.querySelector(".minusBtn");
// let convertBill = parseInt(billTotal);
// let convertTip = parseInt(TipAmount);
counter = 0
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let oldValue = parseInt(people.innerText)
    people.innerText = oldValue + 1
    total = billTotal.value;
    let tipPercentage = TipAmount.value / 100;
    let tipAmount = total * tipPercentage
    let result = parseInt(tipAmount) + parseInt(total)
    totalPerPerson.innerText = (result / parseInt(people.innerText)).toFixed(2);
})

minusBtn.addEventListener("click" , (e) => {
    e.preventDefault();
    if(parseInt(people.innerText) <= 1 ){
        people.innerText = parseInt(people.innerText) - 0
    }
    else{
        let oldValue = parseInt(people.innerText);
        people.innerText = oldValue - 1
    }

    total = billTotal.value;
    let tipPercentage = TipAmount.value / 100;
    let tipAmount = total * tipPercentage
    let result = parseInt(tipAmount) + parseInt(total)
    totalPerPerson.innerText = (result / parseInt(people.innerText)).toFixed(2);
})



let totalPerPerson = document.querySelector(".totalPerPerson");
let bothField = [billTotal, TipAmount]
bothField.forEach(all => {
    // let total = totalPerPerson.innerText
    all.addEventListener("input", function(e){
        let query = e.currentTarget.value;
        total = billTotal.value;
        let tipPercentage = TipAmount.value / 100;
        let tipAmount = total * tipPercentage
        let result = parseInt(tipAmount) + parseInt(total)
        totalPerPerson.innerText = (result / parseInt(people.innerText)).toFixed(2);
    })
})

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bb27973180msh77b212db136d47dp15554ejsn21bb7960712d',
		'X-RapidAPI-Host': 'google-images1.p.rapidapi.com'
	}
};

fetch('https://google-images1.p.rapidapi.com/search?q=maldives&safeSearch=false&region=us', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
// let add = document.querySelector(".addBtn");

//  sir is it that the reason why when i increment it doesnt work is because it is only reading the initial value, so i need to add the code there too so that when it increments the people.value, the tip calculating will then use the new people.value?

// The reason for the event input handler is that for me to get the value of the input box i need to check that the user is actually inputing something, so same for the click, so for me too know that a button has been clicked i need to check using the event handler, so when i check it has been clicked then i will now increment the value then make the calculation, based on the new value.

// When writing if statements its good to always state the possible things that can happen.

// Try Qazi's own calculator
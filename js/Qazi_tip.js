// let billInput = d
let billInput = document.querySelector("#billTotal");
let TipInput = document.querySelector("#tipAmount");
let numberOfPeopleDiv = document.querySelector(".people");
let perPersonTotalDiv = document.querySelector(".totalPerPerson");
let addBtn = document.querySelector(".addBtn");
let minusBtn = document.querySelector(".minusBtn");


// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {
    // get bill from user input & convert it into a number
    let bill = Number(billInput.value);

    //  get the tip from user & convert it into a percentage(divide by 100)
    let tipPercentage = Number(TipInput.value) / 100
    
    //  get the total tip amount
    let tipAmount = bill * tipPercentage;
    
    // calculate the total
    let total = tipAmount + bill;

    // calculate the per person total(total divided by the number of people)
    let perPersonTotal = total / numberOfPeople

    // update the perPersonTotal on DOM & show it to the user
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}

const increasePeople = () => {
    //  increment the amount of people
    numberOfPeople += 1

    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople

    // calculate the bill based on the new number of people
    calculateBill()
}

const decreasePeople = () => {
      if(numberOfPeople <= 1){
        numberOfPeopleDiv.innerText = numberOfPeople - 0
      }
      //  decrement the amount of people
      else{
        numberOfPeople -= 1
      }
      // update the DOM with the new number of people
      numberOfPeopleDiv.innerText = numberOfPeople
  
      // calculate the bill based on the new number of people
      calculateBill()
}
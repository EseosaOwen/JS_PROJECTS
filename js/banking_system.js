class Bank {
    constructor(balance){
        this.balance = balance;
    }

    viewBalanace(){
        return `Your balance is $${this.balance}`;
    }

    process(){
        console.log(`Your request is processing...please wait..`)
    }

    deposit(amount){
        this.balance += amount;
        return `You have deposited an Amount of $${amount}`
    }

    withdrawal(amount){
        this.balance -= amount;
        return `Your withdrawal of $${amount} is sucessful`
    }
    
}


const user1 = new Bank(100);
const displayAmount = document.querySelector(".displayAmount");
const depositBtn = document.querySelector(".depositBtn");
const viewBalance = document.querySelector(".viewBalance");
viewBalance.innerHTML = `<p>Your balance: ${user1.balance}</p>`
const withdrawalBtn = document.querySelector(".WithdrawalBtn");
depositBtn.addEventListener("click", ()=> {
    const AmountEntry = Number(document.querySelector(".AmountEntry").value);
    const viewBalance = document.querySelector(".viewBalance");
    const display = user1.deposit(AmountEntry);
    displayAmount.innerHTML = `<p>${display}</p>`
    viewBalance.innerHTML = `<p> Your balance: ${user1.balance}</p>`
})

// when getting a .value on an element, for a click, it is good to call the .value in the click method, if we dont it will just get the value that it initially had when the web loaded, so instead it better we pull the value at the time of the click 
withdrawalBtn.addEventListener("click", () => {
    const AmountEntry = Number(document.querySelector(".AmountEntry").value); 
    const viewBalance = document.querySelector(".viewBalance");      
    if(AmountEntry <= user1.balance){
        const display = user1.withdrawal(AmountEntry);
        displayAmount.innerHTML = `<p>${display}</p>`
    }
    else if(AmountEntry > user1.balance){
        displayAmount.innerHTML = `<p>You dont have a suffiecient balance to make this transaction</p>`        
    }
    viewBalance.innerHTML = `<p>Your balance: ${user1.balance}</p>`
})

// console.log(user1.deposit(4000)); 
// user1.deposit(2000);
// user1.withdrawal(500);
// console.log(user1.deposit(5000))
// console.log(user1.deposit(4000));
// console.log(user1.withdrawal(3500)); 
// console.log(user1.withdrawal(3500)); 

// When using classes i can not return values from a setTimeOut function

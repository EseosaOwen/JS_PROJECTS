const numbers = [1, 2, 3, 5]
// console.log(numbers.map(num => num * 2))

const mapNumbers = (Numbers) => {
   const mapednum = Numbers.map(num => num * 2)
   console.log(mapednum);
}

// mapNumbers([1, 7, 9 , 12])


const filterNumbers = (Numbers) => {
    const filnum = Numbers.filter(num => num > 6)
    console.log(filnum);
}


const squared = numbers.map((num) => num * num)
console.log(squared)

// filterNumbers([13, 6])

const names = ["alice", "bob", "charlie", "danielle"]
const uppercase = names.map(name => {
    return name[0].toUpperCase() + name.slice(1);
})

console.log(uppercase)


const pokemon = ["Bulbaseur", "Charmander", "Squirtie"]

const addP = pokemon.map((name) => `<p>${name}</p>`)

console.log(addP);
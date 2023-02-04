// Classes
// methods
// properties

// this.name is like saying ferrari.name which is similar to self in python
class Car {
    constructor(name, color, topSpeed){
        this.name = name
        this.color = color
        this.topSpeed = topSpeed
        this.currentSpeed = 0;
    }

    zeroToSixty(){
        setTimeout(()=> {
            console.log("pHEW! That was fast!")
            this.currentSpeed += 60;
            console.log(ferrari.currentSpeed);
        }, 2900)
    }

    drive(speed=10){
        console.log("Just drove two miles")
        this.currentSpeed += speed
        console.log(`driving speed at ${this.currentSpeed} mph`);
    }

    brake(){
        console.log("breaking")
        this.currentSpeed -= 10
        console.log(`driving speed at ${this.currentSpeed} mph`);
    }

    stop(){
        console.log("Coming to a screeching halt");
        this.currentSpeed = 0
        console.log(`driving speed at ${this.currentSpeed} mph`);
    }

    // getters and setters
    // checkSpeed(){
    //     setTimeout( ()=> {
    //         console.log(ferrari.currentSpeed);
    //     }, 2900)
    // }
}

// ferrari is an instance of the Car class
const ferrari = new Car("ferrari", "red", 250);
// console.log(ferrari.name);
// console.log(ferrari.color);
// console.log(ferrari.speed);
console.log(ferrari.currentSpeed)

// ferrari.drive();
// ferrari.drive();
// console.log(ferrari.currentSpeed)
// ferrari.drive();
// console.log(ferrari.currentSpeed)
// ferrari.drive();
// console.log(ferrari.currentSpeed)
// ferrari.zeroToSixty();
// ferrari.brake();
// console.log(ferrari.currentSpeed)
// // ferrari.checkSpeed();
// ferrari.stop();
// console.log(ferrari.currentSpeed)

const porsche = new Car("Porsche", "yellow", 240)
console.log("Porsche current speed: " + porsche.currentSpeed);
// porsche.zeroToSixty() + "porsche";
// const nums = [1,2,3,4,5]
// nums.forEach( _ => {
//     porsche.drive(20);
// })

class Array {
    constructor(){

    }
    join() {

    }

    push() {

    }
}

Array.prototype.myPush = function() {
    return this.length
}

// const fruits = ["banana", "berry", "orange"]
// console.log(fruits.myPush())
// nums = [1, 3, 6, 7]
// console.log(nums.splice(0,3))
// console.log(nums)
// You can only have methods inside of classes, 
// An array is a class of type Array, thats why we can have list methods and so on, also for strings, etc. anything with a .function(), is a class

Array.prototype.myPush = function(item) {
    this[this.length] = item 
    return this
  }
  
  const fruits = ['🍌', '🍓', '🍪', '🍐', '🍎']
  fruits.myPush('🥝')
  fruits.myPush('🍪')
  fruits.myPush('🍓')
  fruits.myPush('🍊')
  console.log(fruits)

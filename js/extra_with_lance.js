let nums = 0
while ( nums < 5) {
    console.log("I am going to five", nums);
    nums ++;
}

// OR
counter = 0
finished = true
while(finished){
    console.log("looping");
    counter ++;
    if(counter == 12){
        finished = false;
    }
}

window.addEventListener("keyup", (e)=> {
    if(e.key == "q"){
        console.log("you pressed q");
       const punchSound = document.querySelector("#punch");
       punchSound.play();
    }
    else{
        console.log(e.key);
        const victory = document.querySelector("#victory");
       victory.play();
    }
})

// Why cant chrome show me my loops, or the console
// Try creating a speed check.
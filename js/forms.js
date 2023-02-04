let form = document.querySelector(".formPage");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let password = document.querySelector(".password");
//     if(password.value.length < 6){
//         console.log("less than 6");
//         password.style.border = "solid 1px red";
//     }
//     else{
//         password.style.border = "solid 1px greenyellow";
//     }
//     console.log("clicked");
// })

let password = document.querySelector(".password");
password.addEventListener("input", (e) => {
    e.preventDefault();
    let query = e.currentTarget.value.length;
    if(query< 6){
        console.log("less than 6");
        password.style.border = "solid 1px red";
    }
    else{
        password.style.border = "solid 1px greenyellow";
    }
    console.log("clicked");
})



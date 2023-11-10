const ScrollIntoView_signup = document.querySelector("#ScrollIntoView_signup");


const btn = document.querySelector(".ScrollIntoView");
btn.addEventListener("click",()=>{
    console.log("click!");
    console.log("ScrollIntoView_signup:",ScrollIntoView_signup);
    ScrollIntoView_signup.scrollIntoView(false);
})
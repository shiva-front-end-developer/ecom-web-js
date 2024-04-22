
var home = document.getElementById("homes");
var cloth = document.getElementById("cloths");
var review = document.getElementById("reviews");
var blog = document.getElementById("blogs");
var contact = document.getElementById("contacts");
var login = document.getElementById("login");
var button = document.getElementById("btn");



 

cloth.addEventListener("click", function(){
    home.style.color="black";
    cloth.style.color="red";
    review.style.color="black";
    blog.style.color="black";
    contact.style.color="black";


})


review.addEventListener("click", function(){
    home.style.color="black";
    cloth.style.color="black";
    review.style.color="red";
    blog.style.color="black";
    contact.style.color="black";


})


blog.addEventListener("click", function(){
    home.style.color="black";
    cloth.style.color="black";
    review.style.color="black";
    blog.style.color="red";
    contact.style.color="black";


})


contact.addEventListener("click", function(){
    home.style.color="black";
    cloth.style.color="black";
    review.style.color="black";
    blog.style.color="black";
    contact.style.color="red";


})

login.addEventListener("click", function(){
    document.getElementById("log").style.display="block"
})

button.addEventListener("click", function(){
    let logName = document.getElementById("logName")
    if(logName.value == ""){
        alert("please Enter Email & Password")
    }else{
    alert("You Logged In");
    document.getElementById("log").style.display="none";
    }


})
function submit(){

    let name = document.getElementById("name");
    if(name.value == ""){
        alert("Please Enter Detail")
    }else{
    alert("Thanks for joining "+" : " + name.value);
    name.value=""
    
    }
}

document.addEventListener("click", function () {
    // const loginButton = document.getElementById("login");
    const loginForm = document.getElementById("loginForm");

    button.addEventListener("click", function () {
        if (loginForm.style.display === "none") {
            loginForm.style.display = "block";
        } else {
            loginForm.style.display = "none";
        }
    });
});


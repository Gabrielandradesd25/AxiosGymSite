// navbar
const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.mobile');

button.addEventListener('click', function (){
    mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function(){
    if(this.window.pageYOffset > 0) return navbar.classList.add('active');
    return navbar.classList.remove('active')
});

const trains = document.getElementById("trains");
const connects = document.getElementById("connects");
const members = document.getElementById("members");
const programs = document.getElementById("programs");

trains.addEventListener("click", function () {
    trains.style.color = "#ff9d00";
    connects.style.color = "black";
    members.style.color = "black";
    programs.style.color = "black";
});

connects.addEventListener("click", function () {
    trains.style.color = "black";
    connects.style.color = "#ff9d00";
    members.style.color = "black";
    programs.style.color = "black";
});

members.addEventListener("click", function () {
    trains.style.color = "black";
    connects.style.color = "black";
    members.style.color = "#ff9d00";
    programs.style.color = "black";
});

programs.addEventListener("click", function () {
    trains.style.color = "black";
    connects.style.color = "black";
    members.style.color = "black";
    programs.style.color = "#ff9d00";
});

//navbutton
const mainBtn = document.getElementById("mainBtn");
mainBtn.addEventListener("click", function () {
    document.querySelector(".join").style.display = "block";
});

const join = document.getElementById("join");

join.addEventListener("click", function () {
    const names = document.getElementById("names");
    const number = document.getElementById("number");

    if (names.value == "" && number.value == "") {
        alert("Please Enter Name and Number")
    } else {
        alert("Thanks for Joining")
        document.querySelector(".join").style.display = "none";
    }
});

//slideshow
const slide = document.querySelectorAll(".slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

console.log(slide);

let count = 0;

next.addEventListener("click", function(){
    count++;
    if(count == slide.length-2){
        count=0;
    }
    myFun();
});

prev.addEventListener("click", function(){
    count--;
    if(count == -1){
        count=slide.length-3;
    }
    myFun();
});

function myFun(){
    slide.forEach(function(curImg){
        curImg.style.transform = `translateX(-${count * 114}%)`
    });
}

//connect
const submit = document.getElementById("submit");
submit.addEventListener("click", function(){
    const name = document.getElementById("name");
    const pass = document.getElementById("pass");

    if (name.value == "" && pass.value == "") {
        alert("Please Enter Name and Password")
    } else {
        alert("Thanks for Connecting")
    }
});
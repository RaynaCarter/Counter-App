// Counter App
// Created by Carter, Rayna (R.) on 12/03/2024

// These four lines allow the selection of the corresponding HTML element
// with the class count,add,clear, and subtract
// It refers to the whole HTML document and uses the querySelector method which returns
// the FIRST element in the document that mataches the selector (.count,.add,. clear,etc)
const count = document.querySelector(".count"); 
const add = document.querySelector(".add");
const clear = document.querySelector(".clear");
const sub = document.querySelector(".subtract");

// We could also just add an event listener to the parent button class
// then proceed to specify the actions taken for each child of the button class
const buttons = document.querySelector(".buttons")


// addEventListener
// Its listening for a click event
// When the described event occurs ("click") a certain action takes place 
// in this case it adds one 

add.addEventListener("click", () => {
    count.innerHTML++;
    changecolor();
});
clear.addEventListener("click", () => {
    count.innerHTML = 0;
    changecolor();
});
sub.addEventListener("click", () => {
    count.innerHTML--;  
    changecolor();
});


// You could also do it like this. 
buttons.addEventListener("click", (example) => {
    if (example.target.classList.contains("add")){
        count.innerHTML++;
        changecolor();
    }
    if (example.target.classList.contains("subtract")){
        count.innerHTML--;
        changecolor();
    }
    if (example.target.classList.contains("clear")){
        count.innerHTML = 0;
        changecolor();
    }
});

// this counter app now adds/subtracts 2 digits at a time

function changecolor() {
    if (count.innerHTML < 0 ) {
        count.style.color = "rgb(238, 80, 56)";
    } else if (count.innerHTML > 0 ){
        count.style.color = "rgb(75, 162, 70)";
    } else if (count.innerHTML == 0) {
        count.style.color = "var(--dark-grey)";
    }
}
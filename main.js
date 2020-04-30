


let zerobutt = document.querySelector(".zero");
zerobutt.addEventListener("click", function() {
    let displayOutput = document.querySelector(".display");
    let text = document.createTextNode("0");
    displayOutput.appendChild(text);
});

let onebutt = document.querySelector(".one");
onebutt.addEventListener("click", function() {
    let displayOutput = document.querySelector(".display");
    let text = document.createTextNode("1");
    displayOutput.appendChild(text);
});

let twobutt = document.querySelector(".two");
twobutt.addEventListener("click", function() {
    let displayOutput = document.querySelector(".display");
    let text = document.createTextNode("2");
    displayOutput.appendChild(text);
});

let threebutt = document.querySelector(".three");
threebutt.addEventListener("click", function() {
    let displayOutput = document.querySelector(".display");
    let text = document.createTextNode("3");
    displayOutput.appendChild(text);
});

let fourbutt = document.querySelector(".four");
fourbutt.addEventListener("click", function() {
    let displayOutput = document.querySelector(".display");
    let text = document.createTextNode("4");
    displayOutput.appendChild(text);
});

let fivebutt = document.querySelector(".five");
fivebutt.addEventListener("click", function() {
    let displayOutput = document.querySelector(".display");
    let text = document.createTextNode("5");
    displayOutput.appendChild(text);
});

let sixbutt = document.querySelector(".six");
sixbutt.addEventListener("click", function() {
    let displayOutput = document.querySelector(".display");
    let text = document.createTextNode("6");
    displayOutput.appendChild(text);
});

let sevenbutt = document.querySelector(".seven");
sevenbutt.addEventListener("click", function() {
    let displayOutput = document.querySelector(".display");
    let text = document.createTextNode("7");
    displayOutput.appendChild(text);
});

let eightbutt = document.querySelector(".eight");
eightbutt.addEventListener("click", function() {
    let displayOutput = document.querySelector(".display");
    let text = document.createTextNode("8");
    displayOutput.appendChild(text);
});

let ninebutt = document.querySelector(".nine");
ninebutt.addEventListener("click", function() {
    let displayOutput = document.querySelector(".display");
    let text = document.createTextNode("9");
    displayOutput.appendChild(text);
});

let addbutt = document.querySelector(".add");
addbutt.addEventListener("click", function() {
    let displayOutput = document.querySelector(".display");
    let text = document.createTextNode(" + ");
    displayOutput.appendChild(text);
});

let minusbutt = document.querySelector(".minus");
minusbutt.addEventListener("click", function() {
    let displayOutput = document.querySelector(".display");
    let text = document.createTextNode(" - ");
    displayOutput.appendChild(text);
});

let dividebutt = document.querySelector(".divide");
dividebutt.addEventListener("click", function() {
    let displayOutput = document.querySelector(".display");
    let text = document.createTextNode(" / ");
    displayOutput.appendChild(text);
});

let decimalbutt = document.querySelector(".decimal");
decimalbutt.addEventListener("click", function() {
    let displayOutput = document.querySelector(".display");
    let text = document.createTextNode(".");
    displayOutput.appendChild(text);
});

let multiplybutt = document.querySelector(".multiply");
multiplybutt.addEventListener("click", function() {
    let displayOutput = document.querySelector(".display");
    let text = document.createTextNode(" * ");
    displayOutput.appendChild(text);
});

let clearbutt = document.querySelector(".clear");
clearbutt.addEventListener("click", function() {
    let displayOutput = document.querySelector(".display");
    displayOutput.innerHTML = " ";
});

let equalbutt = document.querySelector(".equals");
equalbutt.addEventListener("click", function() {
    let displayOutput = document.querySelector(".display");
    displayOutput.innerText = eval(displayOutput.innerText);
});
var colors = ['red', 'green' , 'blue', 'yellow'];

function changeColor() {
    var colorIndex= parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex];
    document.getElementById("colors").innerHTML = "This is " + colors[colorIndex];
}


const button = document.querySelector('button');
const body = document.querySelector('body');

var name = prompt("Whats your name");
document.getElementById("greeting").innerHTML = "hello " + name + " !";
body.style.backgroundColor = colors[0];

button.addEventListener("click", changeColor);



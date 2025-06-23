// Q1. 
let btn = document.createElement("button");
btn.innerText = "Click me";
document.body.appendChild(btn);

// Q2. 
let username = document.createElement("input");
username.setAttribute("placeholder","Username");
document.querySelector("button").prepend(username);
btn.id = "Button";

// Q3.
btn.style.backgroundColor = "blue";
btn.style.text = "white";

// Q4.
let head = document.createElement("h1");
head.innerHTML = "DOM Practice <br>";
document.body.appendChild(head);
head.style.color = "purple";
head.style.textDecoration = "underline";

// Q5.
let text = document.createElement("p");
text.innerHTML = "GITAM College <strong>Set-3</strong> 7th Sem";
document.body.appendChild(text);
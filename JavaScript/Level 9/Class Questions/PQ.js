// Q1.
let text = document.createElement("p");
text.innerText = "Hey I'm red!";
document.querySelector("body").appendChild(text);
text.style.color = "red";

// Q2.
let text2 = document.createElement("h3");
text2.innerText = "I'm blue h3!";
document.querySelector("body").appendChild(text2);
text2.style.color = "blue";

// Q3.
let div = document.createElement("div");
let head = document.createElement("h1");
let text3 = document.createElement("p");

document.querySelector("body").appendChild(div);

div.appendChild(head);
head.innerText = "I'm a div";

div.appendChild(text3);
text3.innerText = "Me too!";

div.style.backgroundColor = "pink";
div.style.border = "black solid";
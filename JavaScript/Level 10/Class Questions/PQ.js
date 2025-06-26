let a=255,b=255,c=255;

let head = document.createElement("h1");
head.innerText =`rgb(${a},${b},${c})`;
document.body.appendChild(head);

let btn = document.createElement("button");
btn.innerText = "Generate Color";
btn.onclick = function(){
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    box.style.backgroundColor = `rgb(${a},${b},${c})`;
    head.innerText =`rgb(${a},${b},${c})`;
}
document.body.appendChild(btn);

let box = document.createElement("div");
box.innerHTML = "This is you new color";
box.style.width = "50rem";
box.style.height = "15rem";
box.style.border = "solid black";
document.body.appendChild(box);
box.style.marginLeft= "auto";
box.style.marginRight= "auto";

document.body.style.textAlign = "center";
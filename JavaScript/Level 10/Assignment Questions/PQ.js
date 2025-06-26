// Q1.
let input = document.querySelector("#input");
input.addEventListener("mouseout",function(){
    console.log("mouseout");
});
input.addEventListener("keydown",function(){
    console.log("pressed a key");
});
input.addEventListener("scroll",function(){
    console.log("scolled");
});
window.addEventListener("scroll",function(){
    console.log("Page scolled");
});
window.addEventListener("load",function(){
    console.log("loading...");
});
body.appendChild(input);

// Q2.
let btn = document.querySelector("#clrBtn");
btn.addEventListener("click",function color(){
    btn.style.backgroundColor = "green";
})

// Q3.
let h2 = document.querySelector("h2");
let text = document.querySelector("#text");
text.addEventListener("input",function(event){
    if((event.data >= "a" && event.data <= "z") || (event.data >= 'A' && event.data <= 'Z'))
    {h2.innerText = text.value;}
})
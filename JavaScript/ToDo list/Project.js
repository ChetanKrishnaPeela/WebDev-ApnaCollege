let list = document.querySelector("ul");
let text = document.querySelector("input");

text.addEventListener("keydown",function(event){
    if(event.key == "Enter")
    {
        let li= document.createElement("li");
        let btn = document.createElement("button");
        btn.innerHTML = "Delete";

        list.appendChild(li);
        li.innerText = this.value;
        li.appendChild(btn);

        text.value = "";

        btn.addEventListener("click", function(){
            this.parentElement.remove();
        })
    }
}
)
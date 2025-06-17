let num=10;
if(num%10 === 0){console.log("Good");}
else{console.log("Bad");}

let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
alert(`${name} is ${age} years old.`);

let quarter = 1;

switch(quarter)
{
    case(1):
        console.log("January, Febuary, March");
        break;
    case(2):
        console.log("April, May, June");
        break;
    case(3):
        console.log("July, August, September");
        break;
    case(4):
        console.log("October, November, December");
        break;
}

str="AaaaaA"
if((str[0] === "A" || "a") && str.length > 5){console.log("Golden String");}
else{console.log("Not Golden String");}

let a=1,b=20,c=3;
let largest= (a>(b>c?b:c)?a:(b>c?b:c));
console.log(largest);s
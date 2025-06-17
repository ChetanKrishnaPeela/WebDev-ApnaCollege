let n = prompt("Enter the number: ");
let arr = [7,9,0,-2];
console.log(arr.slice(0,3));

console.log(arr.slice(arr.length-3,arr.length));

let str1 = prompt("Enter a string:");
if(str1 == 0){console.log("String is empty");}

let str2 = "abcdABCD";
let index = prompt("Enter an index");
if(str2[index]>='a' || str2[index]<='z'){console.log("It is lowercase");}
else if(index >= str2.length){"Index out of range";}
else{console.log("It is uppercase");}

let str3="      a       ";
console.log(str3.trim());

num = prompt("Enter a number:");
if(arr.indexOf(num) != -1){console.log("Number exists");}
else if(index >= arr.length){"Number out of range";}
else{console.log("Number does not exist");}
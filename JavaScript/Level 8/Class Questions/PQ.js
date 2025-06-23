// Q1.
let arr = [1,2,3,4,40,50,-2];
let arr2 = [10,20,30];
console.log(arr.every((num) => num%10 == 0));
console.log(arr2.every((num) => num%10 == 0));

// Q2.
console.log(arr.reduce((min, i) => {
    if(i < min) {return i;}
    else {return min;}
}));
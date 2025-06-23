// Q1. 
let arr = [1,2,3,4];
console.log(arr.reduce((Ssum, i)=> Ssum + i**2) / arr.length);

// Q2. 
console.log(arr.map((num) => num+5));

// Q3.
let arr2=['a','b','c','d','e','f'];
let ans=(arr2.map((i) => i.toUpperCase()));;
console.log(ans);

// Q4.
let arr3 = [1,2,3,4];
function doubleAndReturnArgs(arr3, ...args){
    return [...arr, ...args.map(i => i * 2)];
}
console.log(doubleAndReturnArgs(arr3, 10,20,30));

// Q5.
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
let obj1 = { car: "Toyota" };
let obj2 = { book: "Harry Potter" };
console.log(mergeObjects(obj1, obj2));

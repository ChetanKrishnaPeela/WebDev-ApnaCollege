// Q1.
let arrayAverage = (arr) =>{
    let sum=0;
    for(i of arr) sum += i;
    return sum/arr.length;
}
console.log(arrayAverage([1,2,3,4,5,6,7,8,9]));

// Q2.
let Event = (n) =>{
    if(n%2 == 0) console.log("Even");
    else console.log("Odd");
}
Event(10);
Event(11);

// Q3 Ans- undefined

// Q4 Ans- undefined
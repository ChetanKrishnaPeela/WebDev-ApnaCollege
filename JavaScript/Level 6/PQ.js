// Q1.
let arr = [1,2,3,4,5,6,7,8,9,10];
let num = prompt("Enter a number: ");
function largerNums(arr, n)
{
    let ans=[];
    for(i of arr){if(i > n){ans.push(i);}}
    return ans;
}
console.log(largerNums(arr, num));

// Q2.
let str = "aabbccddee";
function uniqueStr(str)
{
    let arr="";
    for(i of str)
    {
        if(arr.indexOf(i) == -1){arr += i;}
    }
    return arr;
}
console.log(uniqueStr(str));

// Q3.
function longestCountry()
{
    let n = prompt("Enter the number of countries: ");
    let countries = [];
    let largest = "";
    for(i=0; i<n; i++)
    {
        countries[i] = prompt(`Write the name of the country ${i+1}`);
        if(countries[i].length > largest.length){largest = countries[i];}
    }
    return largest;
}
console.log(longestCountry());

// Q4.
let str2 = "Hello, my name is Chetan Krishna";
function vowels(str)
{
    let count = 0;
    for(i=0; i<str.length; i++){if(str[i].toLowerCase() == ('a' || 'e' || 'i' || 'o' || 'u')){count++;}}
    return count;
}
console.log(vowels(str2));

// Q5.
let start = prompt("Enter a start number: ");
let end = prompt("Enter an end number: ");
function randomNumbers(start, end)
{
    return parseInt(start) + Math.ceil(Math.random() * parseInt(end - start));
}
console.log(randomNumbers(start, end));
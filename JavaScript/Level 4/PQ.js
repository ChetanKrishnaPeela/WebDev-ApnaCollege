let arr = [1,2,3,4,5,6,2,3];
let num = 2;
for(i=0;i<arr.length;i++){if(arr[i] == num){arr.splice(i,1);}}
console.log(arr);

let num2 = 23456789;
let count = 1;
let temp;
while(num2 != 0)
{
    count++;
    num2= Math.floor(num2/10);
}
console.log(count);

let num3 = 23456789;
let ans=0;
while(num3 != 0)
{
    ans += num3%10;
    num3= Math.floor(num3/10);
}
console.log(ans);

let num4 = parseInt(prompt("Enter a number to get its factorial: "));
let ans2=1;
for(i=2;i<= num4; i++){ans2*=i;}
console.log(ans2);
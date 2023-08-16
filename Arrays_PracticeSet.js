//Q.Creat an array of numbers and take input from the user to add numbers to this array.
const prompt = require('prompt-sync')();
let num=[1,2,3,4,5,6,78]
let n=prompt("Enter a number=")
n=Number.parseInt(n)
num.push(n)
console.log(num)
console.log(num.shift(), num)
console.log(num.unshift(59), num)

//Q. Creat an array of numbers untill a zero is entered in the array

let num1=[1,2 ,3,6,7]
let a;
console.log(a)
do{
    a=prompt("Enter a Number =")
    a=Number.parseInt(a)
    num1.push(a)
}
while(a!=0)
console.log(num1)

//Q. Filter for numbers divisible by 10 from a given array
let num2=[34,60,45,70,23,12,80]
let n1=num2.filter((x)=>{
    return x%10==0
})
console.log(n1)

//Q.Create an array of squares of a given array
let num3=[45,1,3,6]
let num3_sq=num3.map((x)=>{
    return x*x
})
console.log(num3_sq)

//Q. Use reduce() to calculate the factorial of a number from an array of first n natural number.
let num4=prompt("Enter the value of n=")
let fact_arr=[]
let i=0
do{
fact_arr[i]=i+1
i++
}while(i<=num4-1)
console.log("Factorial Matrix=",fact_arr)
let fact=fact_arr.reduce((x1,x2)=>{
    return x1*x2
})
console.log(num4,"!=", fact)


//Mapping
let arr=[23,67,23,56]
let a=arr.map((value,index, array)=> //creates a new array
{
//console.log(index, value, array)
return index+1
})
//console.log(a)

//Filter method
let arr1=[35,78,46,9,0,141,64,234]
let f=arr1.filter((value)=>{
    return value
})
//console.log(f, f.length, typeof f)

//Reduce Methods

let arr2=[1,2,3,34,2,1,5]
let newarr2=arr2.reduce((h1,h2)=>{ //Fibbonaci sum
return h1+h2
})
console.log(newarr2)

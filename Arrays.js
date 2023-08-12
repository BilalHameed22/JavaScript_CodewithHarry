//collection of items can carry different types of data sets.
//Can hold more than one value
let marks_12=[91,82,73,64, null, false, "not present"]
marks_12.push(80) //same as => marks_12[7]=80
marks_12[0]=96 //Changing the value of an array.
//console.log(marks_12)
//console.log(marks_12[6])
console.log("The length of the marks class 12 =", marks_12.length)
console.log("\n")

for(let i=0; i<marks_12.length; i++)
{
console.log("Roll Numbers =", i+1, "\tMarks = ", marks_12[i])
}
//Question no 1let str="Har\""
console.log(str.length)
const sentence="The quick brown fox jumps over the lazay dog.";
const word="fox";
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word) ? 'is': 'is not'} in the sentence`); 

//Question no 2
//startswith & endswith
var pie_rankings = "Key Lime Apple Blueberry Cherry Strawberry Pecan Peach";

console.log(pie_rankings.startsWith("Key Lime"));
console.log(pie_rankings.endsWith("Peach")); 

//Question no 3
const name = "Bilal Hameed"
console.log(name.toUpperCase())

//Question no 4

let str2="Please give me Rs 1000"
let amount=str2.slice("Please give me".length)
console.log(amount)
console.log(typeof amount)
amount=Number.parseInt(amount)
console.log(typeof amount)

//Question no 5
let friend="Deepika"
friend[3]="R"
console.log(friend) //friend is not changed because string is immutable

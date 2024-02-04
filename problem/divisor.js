// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming


function largestWord(simpleString) {
    const divisionSring = simpleString.split(" ")
    let bigestWord=''
    for(let i=0; i<divisionSring.length; i++){
        if(bigestWord.length<divisionSring[i].length){
            bigestWord=divisionSring[i]
        }
    }
    return bigestWord
}
const simpleString = "I am learning Programming to become a programmer"
const result = largestWord(simpleString)
console.log(result)
// const numbers=[12,8,5,6,99,6,77]
// console.log(Math.max(12,8,5,6,99,6,77))
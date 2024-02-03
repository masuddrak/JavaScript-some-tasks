// Duplicate remove the array

function removDuplicate(numbers){
    const removeDuplicateNumber=[]
    for(let number of numbers){
        if(removeDuplicateNumber.includes(number) !== true){
            removeDuplicateNumber.push(number)
        }
    }
    return removeDuplicateNumber
}
const numbers=[12,58,48,3,4,7,8,48,58,7,7,7,7]
const result=removDuplicate(numbers)
console.log(result)
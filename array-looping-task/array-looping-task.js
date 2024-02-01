// Write a JavaScript code to reverse the array colors without using the reverse method.
const colors = ['red', 'blue', 'green', 'yellow', 'orange']

let reversColor=[];
for(const color of colors){
    reversColor.unshift(color)
}
console.log(reversColor)
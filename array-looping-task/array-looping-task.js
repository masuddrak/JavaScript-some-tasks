//Use a for...of loop to concatenate all the elements of an array into a single string.

var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
var stringNumbers=''
for(var number of numbers){
    stringNumbers +=number
}
console.log(stringNumbers)
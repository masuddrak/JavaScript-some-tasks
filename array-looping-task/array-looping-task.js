//Write a JavaScript code to get the even numbers from an array using any looping technique.

 const numbers = [12, 98, 5, 41, 23, 78, 46];
 let evenNumbers=[]
 for(const number of numbers){
    if(number%2===0){
        evenNumbers.push(number)
    }
 }
 console.log(evenNumbers)
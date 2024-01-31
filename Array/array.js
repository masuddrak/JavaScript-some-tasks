
const numbers=[10,15,30,"40" ,"price:556"];
let sum=0;
for(let i=0; i<numbers.length; i++){
   let convertNumber=parseInt(numbers[i])
   if(!isNaN(convertNumber)){
    sum=sum+convertNumber
   }
    
}
console.log(sum)
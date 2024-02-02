
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function checkEvenOdd(number){
    if(number%2===0){
        return number*2
    }else{
        return number/2
    }
}
const result=checkEvenOdd(9)
console.log(result)
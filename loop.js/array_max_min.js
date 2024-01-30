const numbers=[10, 566, 88, 3, 896,5]
let max=numbers[0]
let min=numbers[0]
for(let i=0; i<numbers.length; i++){
    let currentNumb=numbers[i]
    if(max<currentNumb){
        max=currentNumb
    }
    if(min>currentNumb){
        min=currentNumb
    }
}
console.log(max,min)
const weight=90;
const height=1.61;
const BMI=weight/(height*2);
console.log(BMI)
if(BMI<18.5){
    console.log('are you rnderweight')
}
else if(BMI>18.5 && BMI <=24.9){
    console.log("you are a normal")
}
else if(BMI>=25 && BMI<=29.9){
console.log("you are overweight")
}
else{
    console.log('otherwise, you are obese')
}
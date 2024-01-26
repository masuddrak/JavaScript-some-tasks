const price=500;
const age=81;
if(age<12){
    console.log('you can free eat now')
}
else if(age>80){
    const discount=price*50/100;
    const bill=price-discount;
    console.log('age 80+ : '+bill)
}
else if(age>12 && age<20){
    const discount=price*70/100;
    console.log(discount)
    const bill=price-discount;
    console.log('age 13-19 : '+bill)
}
else{
    console.log(price)
}
function discundPrince(quntity){
   const quiltity100=100
   const quiltity200=90
   const avobe200=70
   if(quntity<=100){
    const totalPrice=quntity*quiltity100
    return totalPrice
   }
   else if(quntity<=200 ){
        const frist100TOtal=quiltity100*100
        const remainingQuintity=quntity-100
        const secontPrice=remainingQuintity*quiltity200
        const totl=frist100TOtal+secontPrice
        return totl
   }
   else{
    const frist100TOtal=quiltity100*100
    const second100TOtal=quiltity200*100
    const remainingQuintity=quntity-200
    const third200Avobe=remainingQuintity*avobe200
    const totl=frist100TOtal+second100TOtal+third200Avobe
    return totl

   }
}
console.log(discundPrince(202))
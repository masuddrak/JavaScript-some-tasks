function discundPrince(quntity){
    if(quntity<=100){
        const total=quntity*100
        return total
    }

   else if(quntity>100 && quntity<=200){
        const total=quntity*90
        return total
    }
    else{
        const total=quntity*70
        return total
    }
}
console.log(discundPrince(200))
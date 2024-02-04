
const phones=[
    {name:"samsung",price:333,color:"black"},
    {name:"Nokia",price:3332,color:"black"},
    {name:"Iphone",price:3331555,color:"black"},
    {name:"symphoney",price:3335,color:"black"},
    {name:"HTC",price:33310,color:"black"},
]
function cheapPhone(phones){
    let bigPricePhone={name:"samsung",price:333,color:"black"}
    for(const phone of phones){
        if(bigPricePhone.price<phone.price){
            bigPricePhone=phone
        }
    }
    console.log(bigPricePhone)
}
cheapPhone(phones)


function allPhones(phones,search){
    let addPhones=[]
    for(const phone of phones){
        if(phone.name.toLowerCase().includes(search.toLowerCase())){
            addPhones.push(phone)
        }
    }
    return addPhones
}
const phones=[
    {name:"samsung Phone",preice:5896},
    {name:"samsung Laptop",preice:58596},
    {name:"Nokia laptop",preice:5896},
    {name:"car bmw",preice:5896},
    {name:"Car sonia",preice:5896},
  
]
console.log(allPhones(phones,"car"))
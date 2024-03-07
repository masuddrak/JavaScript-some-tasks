const sudent={
    name:"masud",
    age:20,
    hovis:["cricket","footbal"]
}
const sudentKeys=Object.keys(sudent)
const sudentVlue=Object.values(sudent)
// console.log(sudentKeys,sudentVlue)
// false  valu = "",undefined,0,null,
const numbers="0";
// numbers?console.log("it`s is a true"):console.log("is is a false value")

let myNumber=0;
if(myNumber){
    myNumber=myNumber*2
}else{
    // console.log("is not true value")
}
// console.log(myNumber)

//how to change data type tring and number shortcut
let num=25
let strNum=num+""
let name="52"
let nameNumber=+name
// console.log(nameNumber)

let isActive=false;
const showDisplay=()=>console.log("it`s  true")
const hidDisplay=()=>console.log("it`s  false")
// isActive?showDisplay():hidDisplay()
isActive && showDisplay()
// isActive && hidDisplay()
isActive || hidDisplay()
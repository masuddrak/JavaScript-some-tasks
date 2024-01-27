
let price = 3000;
const isLeader = true;

// if (isLeader === true) {
//     if (price <= 1000) {
//         price = 0
//     }
//     else {
//         const discount = price / 2;
//         price = discount
//     }
// }
// else {
//     price = price + 100;
// }
price = isLeader === false ? price<=1000?0:price/2 :price+100;
// console.log(price)
let x = 5>'4'
// console.log(x)
let score = 75;
let grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
}
console.log(grade);

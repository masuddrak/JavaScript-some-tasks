
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
console.log(price)
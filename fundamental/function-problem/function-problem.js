// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let smallestName=heights2[0]
// console.log(smallestName.length)
for(const name of heights2){
    if(smallestName.length>name.length){
        smallestName=name
    }
}
console.log(smallestName)
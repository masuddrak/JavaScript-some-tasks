// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(str) {
    let numberOf0 = ''
    for (let SigleStr of str) {
        if (SigleStr === "0") {
            console.log(SigleStr)
            numberOf0 += SigleStr
        }
    }
    return numberOf0.length
}
const str0 = count_zero("0101001")
console.log(str0)
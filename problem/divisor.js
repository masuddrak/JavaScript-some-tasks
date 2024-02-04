// You are given an array of numbers. Count how many times the a number is repeated in the array.

const numbers = [5, 6, 11, 12, 98, 5]
function checkPreptNumber(numbers) {
    const temNumber = [5]
    let commonnumber = []
    for (let number of numbers) {
        if (temNumber[0] === number) {
            // console.log(number)
            commonnumber.push(number)
        }

    }
    console.log(commonnumber)
}
checkPreptNumber(numbers)
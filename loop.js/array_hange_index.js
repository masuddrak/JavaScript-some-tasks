const numbers=[10, 20, 30, 40, 50]
console.log(numbers)
let tem=numbers[3]
numbers[3]=numbers[1]
numbers[1]=tem
console.log(numbers)
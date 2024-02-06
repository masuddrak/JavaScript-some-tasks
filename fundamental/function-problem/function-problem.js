// Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
function companyProviteSalary(employees) {
    
    let experienceIncrementTotal = 0
    let startingSalary = 0

    for (const employe of employees) {
        if (employe.experience !== 0) {
            experienceIncrementTotal += (employe.experience * employe.increment)
            startingSalary += employe.starting
        }
        else {
            experienceIncrementTotal += (employe.experience + employe.increment)
            startingSalary += employe.starting
        }
    }
    const totalaSalaryProvide = experienceIncrementTotal + startingSalary
    return totalaSalaryProvide
}

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
const result = companyProviteSalary(employees)
console.log(result)
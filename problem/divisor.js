// Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100, but these centurial years are leap years if they are exactly divisible by 400. For example, the years 1700, 1800, and 1900 are not leap years, but the years 1600 and 2000 are.

function ieapYear(year){
    if(year%100 !== 0 && year%4===0){
        return true
    }
    else if(year%400===0){
        return true
    }
    else{
        return "is not leap year"
    }
}
const year=ieapYear(1900)
console.log(year)
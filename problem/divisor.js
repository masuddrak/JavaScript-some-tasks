// Write a function to count the number of vowels in a string.

function vowelsChecker(name){
    // console.log(name.length )

    let vowels=''
    for(let i=0; i<name.length; i++){
        if(name[i]==="a" || name[i]==="e"||name[i]==="i"||name[i]==="o"||name[i]==="u"){
            vowels=vowels+name[i]
            // console.log(name[i])
        }
    }
    console.log(vowels.length)
}
const name='sakibal hossain'
const names=vowelsChecker(name)
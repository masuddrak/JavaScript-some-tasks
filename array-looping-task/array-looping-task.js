//Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

//Output:
//'person working hard a am I'

 const statement = 'I am a hard working person'

 let reverStatement=""
 const newStatement=statement.split(" ")
 for(const word of newStatement){
    let uperCaseWord=word[0].toUpperCase()+word.slice(2)

    reverStatement=uperCaseWord+" "+reverStatement;
 }
 console.log(reverStatement)
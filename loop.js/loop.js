let sum=0;
for(let i=10; i>=1; i--){
    if(i%2===0){
        continue;
    }
    sum=sum+i
    console.log(i)
}
console.log(sum)
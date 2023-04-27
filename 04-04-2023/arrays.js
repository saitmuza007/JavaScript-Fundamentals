const names=["Mathew","Pravin"]
const num=[1,2,3,4,5,6,7,8,9,10]
let sum=0
let text=" "
for(let i in names)
{
    text+=names[i]
}
console.log(names)
console.log(text)
for(let j in num)
{
    sum+=num[j]
}
console.log(sum)
for (var i=10;i>0;i--)
{
    console.log(i)
}//Reverse For Loop

for (var i=0;i<10;i++)
{
    console.log(i)
}//Front For loop

const person={fname:"John",lname:"Larry",age:25}

let text=""
for(let x in person)
{
    
    console.log(person[x])
}

const array=[23,45,67,89,90]
const arrays=[223,245,627,849,940]
for(let i in array)
{
    console.log(array[i])
}//for in 
for(var j of arrays)
{
    console.log(arrays[j])
}//assignment
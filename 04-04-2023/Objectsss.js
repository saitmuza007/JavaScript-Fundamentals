a={
"name":"Amir"
}
console.log(a)

//IF VALUE IS A FUNCTION THEN PROPERTY BECOMES A METHOD ... tHIS IS CALLED BJECT METHODS IN JS 

let person={
    firstName:"Mathew",
    lastName:'Pravin'
}
person.get=function()
{
    console.log("Hey you are  hello"+person.firstName)
}

person.get()


let person1={
    firstName:"Mathew",
    lastName:'Pravin',
    get1:function()
    {
        console.log("JIAHDDHSBDJ")
    },
    getFullName:function()
    {
        return this.firstName +' '+this.lastName
    }
}
person1.get1()
console.log(person1.getFullName())

//Constructor Function :



function Guy(firstName,lastName)
{
    this.firstName=firstName,
    this.lastName=lastName
}

let guy=new Guy("Mathew ","Bouytyuyy")
console.log(guy)
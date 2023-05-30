function Person(name)
{

    this.name=name
}
Person.prototype.getName=function()
{
    return this.name
}
var mathew=new Person("Mathew Pravin")
console.log(mathew.getName())



class Person1{
    constructor(name)
    {
        this.name=name
    }
    getNameS()
    {
        return this.name
    }
}

let live=new Person1("MATHEW PRAVIN")

console.log(live.getNameS())



class Person2{
    constructor(age) {
        
        this.age=age
        
    }
    getAge()
    {
        return this.age
    }
    setAge(newAge)
    {
        if(newAge==='')
        {
            throw 'This cant be left Empty '
        }
        this.age=newAge
    }
}

let person2=new Person2(23)
console.log(person2)

person2.setAge(234)
console.log(person2.getAge())
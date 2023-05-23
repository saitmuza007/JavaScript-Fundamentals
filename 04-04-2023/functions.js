function add()
{
  
    return 10+30;
    
}
console.log(add())
console.log(add())

//Hoisting (Using a function before even declaring it .... )

console.log(subtract())
function subtract()
{
    return 90-12;
}

//Storing a function in variable

function multiply(a,b,c,d)
{
    return a*b+c/d
}
let mul=multiply(10,20,30,40)
console.log(mul)

//Anonymous Function /Lambda Function 

let show=function()
{
    console.log("Hi")
}
show()

//pass by value example
function square(x)
{
    x=x*x;
    return x;
}

let y=10;
let result=square(y)
console.log(result)
console.log(y)


let person={
    name:'Mathew',
    age:10
};
function increaseAge(obj)
{
    obj.age+=1
}
increaseAge(person)
console.log(person)

function countDown(from)
{
    console.log(from)
    let next=from-1
    if(next>0)
    {
        countDown(from-1)
    }
    
}


countDown(10)

function Hello(hi="Mathew")
{
    console.log(hi)
}
Hello()
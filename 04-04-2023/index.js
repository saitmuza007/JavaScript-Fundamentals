// var --- Globally Accessible Everywhere
// let --- Is Fundamentally accessible only in the block 
// const --- Is Accessisble only once for assignment 

const names="Mathew"
console.log(names) 

{
    names="Mathew Pravin"
    console.log(names) 
}
console.log(names)

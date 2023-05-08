let age=-8
if(age>18){
    console.log("Woaaaaah You can Vote !")
}
else if(age<0)
{
 console.log("Negative Number")
}
else{
    console.log("You are a mumma's boy")
}
//ternary
let result=(age>90) ? "You can drive":"You Cant Drive" 
let res=(age<0)?"Hey man check the value":" "
console.log(result)
console.log(res)
//switch case
option=3
switch (option) {
    case 1:
        console.log("Hey you checked 1")
        break;
    case 2:
        console.log("Hey you checked 2")
        break;
    default:
        console.log("Police")
        break;
}

//for already taught

//while

var i=0
while(i<100)
{i=i+1
    console.log(i)
    continue;
    
  
}
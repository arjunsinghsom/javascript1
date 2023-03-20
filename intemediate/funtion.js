let sayHelllo = function(){
    console.log('hello user')
}
sayHelllo();
////////////////////////////////////


let sayHi = function(name){
    console.log(`hello ${name}` )
}
sayHi('ajju');
///////////////////////////////////////////


let adder = function(num1 , num2){
    let sum = num1 + num2
    return sum
}

let ret = adder(2,4)
console.log(ret)
//////////////////////////////

let mymultiplier = function(num3, num4){
    let multi = num3*num4
    return multi
}
console.log(mymultiplier(3,4))
/////////////////////
//for each

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
console.log(days.length)
days.forEach(function(day,index){                                             // imp
    console.log(`day num is ${index+1} and the day is ${day}`)
})

////////////////////////////////////////////////////////
// For Loop

for (let i = 0; i < days.length; i++) {
    const element = days[i]
    console.log(element)
    
}

// //example FOR LOOP

const todos = []

todos.push('bread')
todos.push('jam')
todos.push('knife')

for (let index = 0; index < todos.length; index++) {
    const element = todos[index];
    console.log(`your task num is ${index + 1} is : ${element}`)
    
}


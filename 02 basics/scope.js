let global = 'John'
if(true){
    let local = 'Micheal'
    let global = 'hero'     //if we use "let" global = 'hero' then it is for its scope only but we assign value like "global"= "hero" it make it globally
    console.log(global)
    console.log(local)
}
// console.log(local) //local obj can not be used outside its lexical scope
console.log(global)
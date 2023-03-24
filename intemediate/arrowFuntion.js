let sayHello = (name)=>  `hi ${name}`

console.log(sayHello('samy'))



const cameras = { 
    price : 600,
    weight : 2000,                                 // pls dont use arrow funtion in method and contructor 
    myDes : function(){
        return `this canon camera is of ${this.price}`
    }
}
console.log(cameras.myDes())
// console.log(document.URL)
// const myElement = document.querySelectorAll('p')
// console.log(myElement[0])


// const myPElement = document.querySelector('p')
// myPElement.textContent = 'hello John Sir'


const myPElement = document.querySelectorAll('p')
myPElement.forEach(function(p){
    p.textContent = 'I am changed using JS'
})

document.querySelector('button').addEventListener('click', (e)=> {
   e.target.textContent = 'I am clicked'                               // to change button label
})
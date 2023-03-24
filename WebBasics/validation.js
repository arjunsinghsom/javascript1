function myValidation(){
    let myValue = document.getElementById('myform').value

    if (isNaN(myValue) || myValue < 1 || myValue > 30) {
        console.log('invalid input')
    }
    else{
        console.log('validated')
    }
}

// form validation

document.querySelector('.myform').addEventListener('submit', (e)=>{e.preventDefault()

console.log(e.target.username.value)
})
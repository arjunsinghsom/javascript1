let isVerified = true
let isLoggedIn = true
let paymentToken = true
let isGuest = true


if(isVerified && isLoggedIn && paymentToken){
    console.log('Grant user to paid course')
}
else if(isVerified || isGuest){
    console.log('Allow free previews')
}else{
    console.log('Message : please contact admin')
}
console.log("script connected")
const getEmail = document.getElementById('user-email');
const getPassword = document.getElementById('user-password');
const submitBtn = document.getElementById('submit-btn');
let formArea = document.getElementById('form-area')
let userMail;
submitBtn.addEventListener('click', ()=>{
    let emailValue = getEmail.value;
    console.log(emailValue);
    let passwordValue = getPassword.value;
    console.log(passwordValue);
    let errorMsg = document.createElement('p');
    errorMsg.innerText = '*invalid account';
    errorMsg.classList = 'text-center pb-5 text-white-400'
    if((emailValue.indexOf('@gmail.com') != -1) && (passwordValue.indexOf('bank') != -1)){
        window.location.href = '/another-html/bank.html';
    }else{
        formArea.appendChild(errorMsg);
    }
})

const loginSection = document.getElementById('login-section');
const accountSection = document.getElementById('account-section')

const getEmail = document.getElementById('user-email');
const getPassword = document.getElementById('user-password');
const submitBtn = document.getElementById('submit-btn');
let formArea = document.getElementById('form-area')

submitBtn.addEventListener('click', () => {
    let emailValue = getEmail.value;
    let passwordValue = getPassword.value;
    let errorMsg = document.createElement('p');
    errorMsg.innerText = '*invalid account';
    errorMsg.classList = 'text-center pb-5 text-white-400'
    if ((emailValue.indexOf('@gmail.com') != -1) && (passwordValue.indexOf('bank') != -1)) {
        window.location.href = '/another-html/bank.html';

    } else {
        formArea.appendChild(errorMsg);
    }
})
console.log("account script is working");

// get all button 
const depositInput = document.getElementById('deposite-input');
const depositeButton = document.getElementById('deposit-btn');

const widthdrawInput = document.getElementById('widthraw-input');
const widthdrawBtton = document.getElementById('widthraw-btn');

const depositText = document.getElementById('deposit-amount');
const widthdrawText = document.getElementById('widthraw-amount');
const totalAmountText = document.getElementById('total-amount');

const logout = document.getElementById('logout-btn');
logout.addEventListener('click', function(){
    window.location.href = '/index.html';
})

let finalTotalAmount;

// deposit function
const depositFunction = () => {
    let depositValue = depositInput.value;
    // current deposit
    let currentDepositValue = depositText.innerText;
    let totalDepositeAmount = parseFloat(depositValue) + parseFloat(currentDepositValue);
    depositText.innerText = totalDepositeAmount;
    depositInput.value = '';

    // total bank amount
    let totalAmount = totalAmountText.innerText;
    finalTotalAmount = parseFloat(totalAmount) + totalDepositeAmount;
    totalAmountText.innerText = finalTotalAmount;
}
// widthraw function 
const widthrawFunction = () =>{
    let widthdrawValue = widthdrawInput.value;

    // current widthraw 
    let currentWidthraw = widthdrawText.innerText;
    let totalWidthraw = parseFloat(widthdrawValue) + parseFloat(currentWidthraw);
    widthdrawText.innerText = totalWidthraw;
    widthdrawInput.value = '';

    // total amount 
    let totalAmount = totalAmountText.innerText;
    finalTotalAmount = parseFloat(totalAmount) - parseFloat(widthdrawValue);
    totalAmountText.innerText = finalTotalAmount;
}
depositeButton.addEventListener('click', depositFunction)

widthdrawBtton.addEventListener('click', widthrawFunction);
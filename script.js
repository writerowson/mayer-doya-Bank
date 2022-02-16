let depositValue = document.getElementById('deposit-value');
let depositOutput = document.getElementById("deposit-output");

let withdrawValue = document.getElementById('withdraw-value');
let withdrawOutput = document.getElementById("withdraw-output");

let balanceOutput = document.getElementById("balance-output")

function addmoney(currentAmount, newamount) {
    const addingDeposit = Number(currentAmount) + Number(newamount);
    return addingDeposit;

}
function deposit() {
    const afteraddingDeposit = addmoney(depositValue.value, depositOutput.innerText)
    depositOutput.innerText = afteraddingDeposit

    // depositOutput.innerText = Number(depositValue.value) + Number(depositOutput.innerText);

    balanceOutput.innerText = afteradding
    // balanceOutput.innerText = Number(balanceOutput.innerText) + Number(depositValue.value);

    depositValue.value = '';
}
function cutMoney(currentAmount, newamount) {
    return Number(currentAmount) - Number(newamount)
}

function withdraw() {

    const afteraddingWithdraw = addmoney(withdrawValue.value, withdrawOutput.innerText)

    withdrawOutput.innerText = afteraddingWithdraw

    // withdrawOutput.innerText = Number(withdrawValue.value) + Number(withdrawOutput.innerText);
    const afteraddingWithdraw = cutMoney(balanceOutput.innerText, withdrawValue.value)
    balanceOutput.innerText = afteraddingWithdraw

    // balanceOutput.innerText = Number(balanceOutput.innerText) - Number(withdrawValue.value);

    withdrawValue.value = '';
}
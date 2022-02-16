function deposit() {
    let depositValue = document.getElementById('deposit-value');
    let depositOutput = document.getElementById("deposit-output");
    let balanceOutput = document.getElementById("balance-output");

    depositOutput.innerText = Number(depositValue.value) + Number(depositOutput.innerText);

    balanceOutput.innerText = Number(balanceOutput.innerText) + Number(depositValue.value);
    depositValue.value = '';

}

function withdraw() {
    let withdrawValue = document.getElementById('withdraw-value');
    let withdrawOutput = document.getElementById("withdraw-output");
    let balanceOutput = document.getElementById("balance-output")
    withdrawOutput.innerText = Number(withdrawValue.value) + Number(withdrawOutput.innerText);

    balanceOutput.innerText = Number(balanceOutput.innerText) - Number(withdrawValue.value);
    withdrawValue.value = '';
}
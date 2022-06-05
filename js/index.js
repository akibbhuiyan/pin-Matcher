function generatePin() {
    let randomNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('displayPin').value = randomNumber

}


document.getElementById('keyPad').addEventListener("click", (event)=>{
    const number = event.target.innerText;
    const calInput = document.getElementById('typedNumber');
    if (isNaN(number)) {
        if (number == "C") {
            calInput.value = "";
        }
    } else {
        const previousNumber = calInput.value;
        const newNumber = previousNumber + number;
        calInput.value = newNumber

    }
})
function verifyPin() {
    const pin = document.getElementById('displayPin').value;
    const typedNumber = document.getElementById('typedNumber').value;
    const succesMsg = document.getElementById('succesMsg')
    const failError = document.getElementById('failError');

    if (pin == typedNumber ) {
        succesMsg.style.display = 'block';
        failError.style.display = 'none';
    } else {
        failError.style.display = 'block';
        succesMsg.style.display = 'none';
    }
}



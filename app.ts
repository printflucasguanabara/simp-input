const number1 = document.getElementById("num1") as HTMLInputElement
const printButton = document.getElementById("printButton") as HTMLInputElement
const printValue = document.getElementById("enterNumber") as HTMLOutputElement

function printEnteredValue(): void {
    const numb1 =  parseFloat(number1.value);
    printValue.textContent = numb1.toString();
}

printButton.addEventListener("click", printEnteredValue)
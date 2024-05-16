var number1 = document.getElementById("num1");
var printButton = document.getElementById("printButton");
var printValue = document.getElementById("enterNumber");
function printEnteredValue() {
    var numb1 = parseFloat(number1.value);
    printValue.textContent = numb1.toString();
}
printButton.addEventListener("click", printEnteredValue);

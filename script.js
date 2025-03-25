function checkEvenOdd() {
    const number = document.getElementById('numberInput').value;
    const result = document.getElementById('result');

    if (number === "") {
        result.textContent = "Please enter a number!";
        result.style.color = "red";
    } else if (isNaN(number)) {
        result.textContent = "Please enter a valid number!";
        result.style.color = "red";
    } else {
        if (number % 2 === 0) {
            result.textContent = `${number} is an Even number.`;
            result.style.color = "green";
        } else {
            result.textContent = `${number} is an Odd number.`;
            result.style.color = "blue";
        }
    }
}

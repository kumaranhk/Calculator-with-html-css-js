function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    let result = document.getElementById('result').value;
    try {
        result = eval(result);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function eraseLastDigit() {
    let result = document.getElementById('result').value;
    result = result.slice(0,-1);
    document.getElementById('result').value = result; 
}
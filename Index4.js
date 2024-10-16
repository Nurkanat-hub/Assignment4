function multiply() {
    let a = parseFloat(document.getElementById('Par1').value);
    let b = parseFloat(document.getElementById('Par2').value);
    let result = a * b;
    document.getElementById('result').textContent = result;
}

function add() {
    let a = parseFloat(document.getElementById('Par1').value);
    let b = parseFloat(document.getElementById('Par2').value);
    let result = a + b;
    document.getElementById('result').textContent = result;
}

function divide() {
    let a = parseFloat(document.getElementById('Par1').value);
    let b = parseFloat(document.getElementById('Par2').value);
    let result = a / b;
    document.getElementById('result').textContent = result;
}

function minus() {
    let a = parseFloat(document.getElementById('Par1').value);
    let b = parseFloat(document.getElementById('Par2').value);
    let result = a - b;
    document.getElementById('result').textContent = result;
}

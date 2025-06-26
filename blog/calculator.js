let currentInput = '';
let display = document.getElementById('display');

function appendNumber(num) {
  currentInput += num;
  updateDisplay();
}

function appendOperator(op) {
  if (currentInput === '') return;
  const lastChar = currentInput[currentInput.length - 1];
  if (['+', '-', '*', '/'].includes(lastChar)) return; 
  currentInput += op;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentInput || '0';
}
function backspace() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}
function appendNumber(num) {
  currentInput += num;
  updateDisplay();
}

function calculate() {
  try {                                   //error handling function(try & catch)
    const result = eval(currentInput); 
    currentInput = result.toString();
    updateDisplay();
  } catch (error) {
    display.textContent = 'Error';
    currentInput = '';
  }

}

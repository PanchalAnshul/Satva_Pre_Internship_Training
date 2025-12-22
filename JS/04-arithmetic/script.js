let currentInput = '0';
let previousInput = '';
let operator = '';
let shouldResetDisplay = false;

const display = document.getElementById('display');
const history = document.getElementById('history');

// Update display
function updateDisplay() {
  display.textContent = currentInput;
}

// Update history
function updateHistory() {
  if (operator && previousInput) {
    history.textContent = `${previousInput} ${operator}`;
  } else {
    history.textContent = '';
  }
}

// Input number
function inputNumber(num) {
  if (shouldResetDisplay) {
    currentInput = num;
    shouldResetDisplay = false;
  } else {
    if (currentInput === '0' && num !== '.') {
      currentInput = num;
    } else {
      // Prevent multiple decimal points
      if (num === '.' && currentInput.includes('.')) {
        return;
      }
      currentInput += num;
    }
  }
  updateDisplay();
}

// Input operator
function inputOperator(op) {
  if (operator && !shouldResetDisplay) {
    calculate();
  }
  
  previousInput = currentInput;
  operator = op;
  shouldResetDisplay = true;
  updateHistory();
}

// Calculate
function calculate() {
  if (!operator || !previousInput) return;
  
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  let result = 0;
  
  switch(operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        alert('Cannot divide by zero');
        clearAll();
        return;
      }
      result = prev / current;
      break;
  }
  
  // Round to 10 decimal places
  result = Math.round(result * 10000000000) / 10000000000;
  
  currentInput = result.toString();
  operator = '';
  previousInput = '';
  shouldResetDisplay = true;
  updateDisplay();
  updateHistory();
}

// Clear All
function clearAll() {
  currentInput = '0';
  previousInput = '';
  operator = '';
  shouldResetDisplay = false;
  updateDisplay();
  updateHistory();
}

// Clear Entry
function clearEntry() {
  currentInput = '0';
  updateDisplay();
}

// Backspace
function backspace() {
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = '0';
  }
  updateDisplay();
}

// Percentage
function percentage() {
  currentInput = (parseFloat(currentInput) / 100).toString();
  updateDisplay();
}

// Square
function square() {
  const num = parseFloat(currentInput);
  currentInput = (num * num).toString();
  updateDisplay();
}

// Square Root
function squareRoot() {
  const num = parseFloat(currentInput);
  if (num < 0) {
    alert('Cannot calculate square root of negative number');
    return;
  }
  currentInput = Math.sqrt(num).toString();
  updateDisplay();
}

// Inverse
function inverse() {
  const num = parseFloat(currentInput);
  if (num === 0) {
    alert('Cannot divide by zero');
    return;
  }
  currentInput = (1 / num).toString();
  updateDisplay();
}

// Negate
function negate() {
  const num = parseFloat(currentInput);
  currentInput = (-num).toString();
  updateDisplay();
}

// Keyboard support
document.addEventListener('keydown', function(e) {
  // Numbers
  if (e.key >= '0' && e.key <= '9') {
    inputNumber(e.key);
  }
  // Decimal point
  else if (e.key === '.') {
    inputNumber('.');
  }
  // Operators
  else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
    inputOperator(e.key);
  }
  // Enter or Equals
  else if (e.key === 'Enter' || e.key === '=') {
    e.preventDefault();
    calculate();
  }
  // Backspace
  else if (e.key === 'Backspace') {
    e.preventDefault();
    backspace();
  }
  // Escape
  else if (e.key === 'Escape') {
    clearAll();
  }
  // Percentage
  else if (e.key === '%') {
    percentage();
  }
});

console.log(' Digital Calculator Ready!');
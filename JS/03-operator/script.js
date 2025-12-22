// Custom Calculator
function customCalc() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operator = document.getElementById('operator').value;
  const resultElement = document.getElementById('custom-result');
  
  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = '⚠️ Please enter valid numbers';
    resultElement.style.background = '#fff3cd';
    resultElement.style.color = '#856404';
    resultElement.classList.add('show');
    return;
  }
  
  let result;
  
  switch(operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '%':
      result = num1 % num2;
      break;
    case '**':
      result = num1 ** num2;
      break;
  }
  
  resultElement.textContent = `${num1} ${operator} ${num2} = ${result}`;
  resultElement.style.background = '#d4edda';
  resultElement.style.color = '#155724';
  resultElement.classList.add('show');
}

// Comparison Operators
function compare(operation) {
  let result;
  let resultElement;
  let explanation;
  
  switch(operation) {
    case 'eq':
      result = 5 == "5";
      resultElement = document.getElementById('eq-result');
      explanation = '(value match, type ignored)';
      break;
    case 'seq':
      result = 5 === "5";
      resultElement = document.getElementById('seq-result');
      explanation = '(value & type must match)';
      break;
    case 'neq':
      result = 5 != 3;
      resultElement = document.getElementById('neq-result');
      explanation = '(values are different)';
      break;
    case 'sneq':
      result = 5 !== "5";
      resultElement = document.getElementById('sneq-result');
      explanation = '(different types)';
      break;
    case 'gt':
      result = 10 > 5;
      resultElement = document.getElementById('gt-result');
      explanation = '(10 is greater)';
      break;
    case 'lt':
      result = 5 < 10;
      resultElement = document.getElementById('lt-result');
      explanation = '(5 is less)';
      break;
    case 'gte':
      result = 10 >= 10;
      resultElement = document.getElementById('gte-result');
      explanation = '(equal counts)';
      break;
    case 'lte':
      result = 5 <= 10;
      resultElement = document.getElementById('lte-result');
      explanation = '(5 is less)';
      break;
  }
  
  resultElement.textContent = `${result} ${explanation}`;
  
  if (result) {
    resultElement.style.background = '#d4edda';
    resultElement.style.color = '#155724';
  } else {
    resultElement.style.background = '#f8d7da';
    resultElement.style.color = '#721c24';
  }
  
  resultElement.classList.add('show');
}

// Assignment Operators
function assign(operation) {
  let x;
  let result;
  let resultElement;
  
  switch(operation) {
    case 'eq':
      x = 10;
      result = `x = ${x}`;
      resultElement = document.getElementById('assign-eq');
      break;
    case 'add':
      x = 10;
      x += 5;
      result = `x was 10, now x = ${x}`;
      resultElement = document.getElementById('assign-add');
      break;
    case 'sub':
      x = 10;
      x -= 3;
      result = `x was 10, now x = ${x}`;
      resultElement = document.getElementById('assign-sub');
      break;
    case 'mul':
      x = 10;
      x *= 2;
      result = `x was 10, now x = ${x}`;
      resultElement = document.getElementById('assign-mul');
      break;
    case 'div':
      x = 10;
      x /= 2;
      result = `x was 10, now x = ${x}`;
      resultElement = document.getElementById('assign-div');
      break;
    case 'mod':
      x = 10;
      x %= 3;
      result = `x was 10, now x = ${x}`;
      resultElement = document.getElementById('assign-mod');
      break;
  }
  
  resultElement.textContent = result;
  resultElement.classList.add('show');
}

// Log to console
console.log('✅ JavaScript Operators loaded!');
console.log('Try clicking buttons to see operators in action!');
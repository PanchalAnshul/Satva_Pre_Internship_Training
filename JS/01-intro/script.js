// Console message on page load
console.log(' JavaScript loaded successfully!');
console.log('Welcome to JavaScript Task 01');

// 1. Alert Button
document.getElementById('btn-alert').addEventListener('click', function() {
  alert(' Hello! This is an alert() popup!');
});

// 2. Prompt Button
document.getElementById('btn-prompt').addEventListener('click', function() {
  const userInput = prompt('What is your favorite color?');
  if (userInput) {
    alert('Your favorite color is: ' + userInput);
    console.log('User entered:', userInput);
  }
});

// 3. Console Button
document.getElementById('btn-console').addEventListener('click', function() {
  console.log(' This message appears in the browser console!');
  console.log('Current time:', new Date().toLocaleTimeString());
  alert('Check your browser console (F12) to see the message!');
});

// 4. Greet Button
document.getElementById('btn-greet').addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const output = document.getElementById('output');
  
  if (name) {
    output.innerHTML = `
      <strong>Hello, ${name}! 👋</strong><br>
      Welcome to JavaScript!<br>
      Nice to meet you!
    `;
    output.style.background = '#d4edda';
    output.style.color = '#155724';
  } else {
    output.innerHTML = '⚠️ Please enter your name first!';
    output.style.background = '#fff3cd';
    output.style.color = '#856404';
  }
});

// 5. Date/Time Button
document.getElementById('btn-date').addEventListener('click', function() {
  const now = new Date();
  const dateOutput = document.getElementById('date-output');
  
  dateOutput.innerHTML = `
    <strong> Current Date & Time:</strong><br>
    ${now.toLocaleDateString()} - ${now.toLocaleTimeString()}
  `;
  dateOutput.style.background = '#d4edda';
  
  console.log('Current date/time:', now);
});

// 6. Calculation Button
document.getElementById('btn-calc').addEventListener('click', function() {
  const result = 2 + 3;
  const calcOutput = document.getElementById('calc-output');
  
  calcOutput.innerHTML = `
    <strong> Calculation:</strong><br>
    2 + 3 = ${result}
  `;
  calcOutput.style.background = '#cce5ff';
  
  console.log('Calculation: 2 + 3 =', result);
});

// 7. Random Number Button
document.getElementById('btn-random').addEventListener('click', function() {
  const random = Math.floor(Math.random() * 100) + 1;
  const randomOutput = document.getElementById('random-output');
  
  randomOutput.innerHTML = `
    <strong> Random Number:</strong><br>
    ${random}
  `;
  randomOutput.style.background = '#f8d7da';
  
  console.log('Generated random number:', random);
});
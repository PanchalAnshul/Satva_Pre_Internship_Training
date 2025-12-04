// JS Task 01 — basic examples and DOM interaction
// This file is loaded with `defer` (so DOM is parsed first).

// Console example (runs immediately)
console.log('JS Task 01: script.js loaded — Hello from JavaScript!');

// Basic calculations (just to show console)
const a = 2, b = 3;
console.log('Example calculation: 2 + 3 =', a + b);

// Helper: update output box
const output = () => document.getElementById('output');

// Alerts and prompt
document.getElementById('btn-alert').addEventListener('click', () => {
  alert('This is alert() from JS Task 01 — Hello!');
});

document.getElementById('btn-prompt').addEventListener('click', () => {
  const name = prompt('What is your name? (prompt example)');
  if (name !== null) {
    output().textContent = `You entered (prompt): ${name}`;
    console.log('User prompted name:', name);
  } else {
    output().textContent = 'Prompt cancelled.';
  }
});

document.getElementById('btn-console').addEventListener('click', () => {
  console.log('Button clicked: console message');
  output().textContent = 'Wrote a message to console (open DevTools → Console to see it).';
});

// DOM interaction — greeting
document.getElementById('btn-greet').addEventListener('click', () => {
  const nameInput = document.getElementById('name');
  const name = (nameInput.value || '').trim();
  if (!name) {
    output().textContent = 'Please enter a name first.';
    return;
  }
  const greeting = `Hello, ${name}! Welcome to JS Task 01.`;
  output().textContent = greeting;
  console.log('Greeted user:', name);
});

// Date/time example
document.getElementById('btn-date').addEventListener('click', () => {
  const now = new Date();
  const s = `Current date/time: ${now.toLocaleString()}`;
  output().textContent = s;
  console.log(s);
});

// Small demonstration of scope: var vs let vs const
(function demoScope() {
  var x = 1;
  let y = 2;
  const z = 3;
  console.log('Scope demo — var x:', x, 'let y:', y, 'const z:', z);
})();

// app.js — Event examples for Task 12

// 1) Click event (addEventListener)
const btnClick = document.getElementById('btn-click');
const clickOutput = document.getElementById('click-output');
let clicks = 0;

btnClick.addEventListener('click', (e) => {
  clicks++;
  clickOutput.textContent = `Button clicked ${clicks} time(s).`;
  console.log('click event', e);
});

// 2) dblclick and mouseover/mouseout
const hoverBox = document.getElementById('hover-box');
const hoverOutput = document.getElementById('hover-output');

hoverBox.addEventListener('dblclick', () => {
  hoverOutput.textContent = 'You double-clicked!';
});

hoverBox.addEventListener('mouseover', (e) => {
  hoverBox.style.background = '#f0f8ff';
  hoverOutput.textContent = 'Mouse is over the box.';
});

hoverBox.addEventListener('mouseout', (e) => {
  hoverBox.style.background = '';
  hoverOutput.textContent = 'Mouse left the box.';
});

// 3) keyboard events: keydown, keyup, keypress (keypress deprecated)
const inputKey = document.getElementById('input-key');
const keyOutput = document.getElementById('key-output');

inputKey.addEventListener('keydown', (e) => {
  keyOutput.textContent = `Key down: ${e.key} (code: ${e.code})`;
  // example: detect Enter
  if (e.key === 'Enter') {
    keyOutput.textContent += ' — Enter pressed!';
  }
});

// 4) form submit with preventDefault
const form = document.getElementById('sample-form');
const formOutput = document.getElementById('form-output');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // stop normal submit
  const name = form.fname.value.trim();
  formOutput.textContent = name ? `Form submitted (simulated): ${name}` : 'Please enter your name';
  console.log('form submit prevented, form data:', { name });
});

// 5) event delegation for list (bubbling)
const todoList = document.getElementById('todo-list');
const todoOutput = document.getElementById('todo-output');

todoList.addEventListener('click', (e) => {
  const delBtn = e.target.closest('button.del');
  if (delBtn) {
    const li = delBtn.closest('li');
    const id = li && li.dataset.id;
    // remove item
    li.remove();
    todoOutput.textContent = `Deleted item id=${id}`;
    console.log('Deleted item', id);
    // stop propagation example (not strictly necessary here)
    e.stopPropagation();
  } else {
    // show clicked li
    const li = e.target.closest('li');
    if (li) {
      todoOutput.textContent = `Clicked item id=${li.dataset.id}`;
    }
  }
});

// 6) touch events: touchstart, touchend
const touchArea = document.getElementById('touch-area');
const touchOutput = document.getElementById('touch-output');

function showTouchMsg(msg) {
  touchOutput.textContent = msg;
  console.log(msg);
}

touchArea.addEventListener('touchstart', (e) => {
  showTouchMsg('Touch start detected');
  // prevent simulated mouse events in some browsers
  // e.preventDefault();
});

touchArea.addEventListener('touchend', (e) => {
  showTouchMsg('Touch end detected');
});

// OPTIONAL: demonstrate event capturing
document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', (e) => {
    console.log('Bubble handler on box', box.querySelector('h2').textContent);
  });
  // Capturing phase listener (runs before bubble)
  box.addEventListener('click', (e) => {
    // no-op capturing; to enable capturing set third arg true:
  }, true);
});

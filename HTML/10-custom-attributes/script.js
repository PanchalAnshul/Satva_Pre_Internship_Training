// Concept 1: Basic Syntax
function showBasic() {
  const el = document.getElementById('basic-demo');
  const data = el.dataset.info;
  document.getElementById('basic-output').innerHTML = `
    <div class="output">✅ Data: "${data}"</div>
  `;
}

// Concept 2: Multiple Data Attributes
function showMultiple() {
  const el = document.getElementById('multi-demo');
  document.getElementById('multi-output').innerHTML = `
    <div class="output">
      <strong>All Data Attributes:</strong><br>
      ID: ${el.dataset.userId}<br>
      Name: ${el.dataset.userName}<br>
      Role: ${el.dataset.userRole}<br>
      Email: ${el.dataset.userEmail}
    </div>
  `;
}

// Concept 3: Reading Data (Two Methods)
function showReading() {
  const el = document.getElementById('read-demo');
  const method1 = el.dataset.product;
  const method2 = el.getAttribute('data-product');
  document.getElementById('read-output').innerHTML = `
    <div class="output">
      <strong>Method 1 (dataset):</strong> ${method1}<br>
      <strong>Method 2 (getAttribute):</strong> ${method2}<br>
      Both return: "${method1}"
    </div>
  `;
}

// Concept 4: Writing & Updating Data
function increment() {
  const el = document.getElementById('write-demo');
  let count = parseInt(el.dataset.count);
  count++;
  el.dataset.count = count;
  document.getElementById('count-display').textContent = count;
  document.getElementById('write-output').innerHTML = `
    <div class="output">✅ Updated data-count to ${count}</div>
  `;
}

function reset() {
  const el = document.getElementById('write-demo');
  el.dataset.count = 0;
  document.getElementById('count-display').textContent = 0;
  document.getElementById('write-output').innerHTML = `
    <div class="output">🔄 Reset data-count to 0</div>
  `;
}

// Concept 5: Naming Convention
function showNaming() {
  const el = document.getElementById('naming-demo');
  document.getElementById('naming-output').innerHTML = `
    <div class="output">
      <strong>HTML → JavaScript:</strong><br>
      data-first-name → dataset.firstName = "${el.dataset.firstName}"<br>
      data-last-name → dataset.lastName = "${el.dataset.lastName}"<br>
      data-phone-number → dataset.phoneNumber = "${el.dataset.phoneNumber}"
    </div>
  `;
}

// Concept 7: Dynamic Actions
function performAction(btn) {
  const action = btn.dataset.action;
  const message = btn.dataset.message;
  document.getElementById('action-output').innerHTML = `
    <div class="output">
      ✅ Action: ${action}<br>
      Message: ${message}
    </div>
  `;
}
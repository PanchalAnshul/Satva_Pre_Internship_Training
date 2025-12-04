// JS Task 02 — Events

// Output area
const output = document.getElementById("output");

// 1️⃣ CLICK EVENT
document.getElementById("btnClick").addEventListener("click", () => {
  output.innerText = "Button clicked!";
});

// 2️⃣ KEYUP EVENT (fires on every key press)
document.getElementById("textInput").addEventListener("keyup", (e) => {
  output.innerText = "You typed: " + e.target.value;
});

// 3️⃣ MOUSE ENTER EVENT
document.getElementById("hoverBtn").addEventListener("mouseenter", () => {
  output.innerText = "Mouse entered the button!";
});

// 4️⃣ MOUSE LEAVE EVENT
document.getElementById("hoverBtn").addEventListener("mouseleave", () => {
  output.innerText = "Mouse left the button!";
});

// 5️⃣ BONUS: Change Event
document.getElementById("textInput").addEventListener("change", () => {
  console.log("Input changed (change event fired)");
});

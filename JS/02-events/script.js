// --- 1. Mouse Events (Hover & Double Click) ---
const hoverZone = document.getElementById('hover-zone');
const dbClickZone = document.getElementById('db-click-zone');
const mouseOut = document.getElementById('mouse-output');

// onmouseover
hoverZone.addEventListener('mouseover', () => {
    hoverZone.style.backgroundColor = "#6366f1";
    hoverZone.style.color = "white";
    hoverZone.innerText = "CURSOR ENTERED!";
    mouseOut.innerText = "Event: onmouseover triggered";
});

// onmouseout
hoverZone.addEventListener('mouseout', () => {
    hoverZone.style.backgroundColor = "transparent";
    hoverZone.style.color = "inherit";
    hoverZone.innerText = "HOVER OVER ME (onmouseover)";
    mouseOut.innerText = "Event: onmouseout triggered";
});

// ondblclick
dbClickZone.addEventListener('dblclick', () => {
    dbClickZone.style.backgroundColor = "#10b981";
    dbClickZone.style.color = "white";
    dbClickZone.innerText = "SUCCESSFUL DOUBLE CLICK!";
    mouseOut.innerText = "Event: ondblclick triggered!";
    
    // Reset after 1.5 seconds
    setTimeout(() => {
        dbClickZone.style.backgroundColor = "transparent";
        dbClickZone.style.color = "inherit";
        dbClickZone.innerText = "DOUBLE CLICK ME (ondblclick)";
    }, 1500);
});

// --- 2. Window & Dialog Events ---
document.getElementById('btn-alert').addEventListener('click', () => alert('Hello!'));

document.getElementById('btn-prompt').addEventListener('click', () => {
    const input = prompt("What's your favorite JS event?");
    if(input) console.log("User likes:", input);
});

document.getElementById('btn-console').addEventListener('click', () => {
    console.log("Console message at:", new Date().toLocaleTimeString());
    alert("Check F12 Console!");
});

// --- 3. Input & Greet Events ---
document.getElementById('btn-greet').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const output = document.getElementById('output');
    if(name) {
        output.innerHTML = `<strong>Hello, ${name}!</strong>`;
        output.style.borderColor = "#22c55e";
    } else {
        output.innerText = "Please enter a name first.";
        output.style.borderColor = "#ef4444";
    }
});

// --- 4. Logic & Math ---
document.getElementById('btn-date').addEventListener('click', () => {
    document.getElementById('date-output').innerText = new Date().toLocaleString();
});

document.getElementById('btn-random').addEventListener('click', () => {
    const num = Math.floor(Math.random() * 100) + 1;
    document.getElementById('random-output').innerText = `Dice Roll: ${num}`;
});
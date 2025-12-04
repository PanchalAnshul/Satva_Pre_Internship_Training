# JS Task 01 — Introduction to JavaScript

## Objective
- Learn where JS runs (browser / Node)
- Include JS in HTML (inline vs external)
- Use `console.log`, `alert`, `prompt`
- Basic DOM access and event listeners
- Understand `defer` attribute for external scripts

## Files
- index.html — demo page (open in browser)
- script.js — JavaScript logic (event handlers & examples)

## How to run
1. Open `index.html` in your browser (double-click or `Live Server` in VS Code).
2. Open DevTools → Console to see console output.
3. Try:
   - Click **Console message** to write to console.
   - Click **Show alert()** to see `alert`.
   - Click **Show prompt()** and enter a name.
   - Enter a name and click **Greet** to update the page.
   - Click **Show Date/Time** to display current date/time.

## Git workflow
```bash
git checkout main
git pull origin main

git checkout -b js-task-01-intro
git add JS/01-intro
git commit -m "JS Task 01: Introduction examples (console, alert, DOM)"
git push --set-upstream origin js-task-01-intro

# Task 10 — Custom data-* Attributes Deep Dive + Mini Project

## Objective
- Use `data-*` attributes to store metadata on DOM elements
- Read / update them via `element.dataset` in JS
- Implement a small interactive UI: details view, cart (localStorage), and filter by tags
- Understand how data attributes connect HTML and JavaScript in real projects

## Files
- index.html
- styles.css
- app.js

## How to run
1. Open `index.html` in a browser (or use Live Server in VS Code).
2. Click **Details** on a product to view metadata loaded from `data-*`.
3. Click **Add to cart** to add product ID to a simple cart (stored in localStorage).
4. Use the **Filter by tag** dropdown to show/hide products by tag.
5. Notice that price for first product updates after 2 seconds (demonstrates dynamic dataset updates).

## Git Commands
```bash
git checkout -b html-task-10-data-attributes
git add HTML/10-custom-attributes
git commit -m "HTML Task 10: Add data-* attributes demo + mini cart"
git push --set-upstream origin html-task-10-data-attributes

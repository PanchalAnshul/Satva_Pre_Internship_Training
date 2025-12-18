# Data Attributes Demo 📦

Simple demo showing how custom `data-*` attributes work in HTML.

## What are Data Attributes?

Custom HTML attributes that store extra information on elements.

```html
<div data-id="123" data-name="Product" data-price="299">
```

## Key Concept

**HTML Side:**
```html
<div class="card" data-id="p1" data-name="T-Shirt" data-price="249">
```

**JavaScript Side:**
```javascript
const card = document.querySelector('.card');
const id = card.dataset.id;        // "p1"
const name = card.dataset.name;    // "T-Shirt"
const price = card.dataset.price;  // "249"
```

## Rules

✅ Start with `data-`
✅ Use lowercase and hyphens: `data-user-name`
✅ Access via `element.dataset.userName` (camelCase)
✅ Store any text value

## Why Use Them?

✅ Store metadata without hidden fields
✅ Clean, valid HTML
✅ Easy JavaScript access
✅ Perfect for dynamic content

---

**Simple concept: Store data in HTML, read with JavaScript!** 🚀
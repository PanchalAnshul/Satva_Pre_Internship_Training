# jQuery 03 - Selectors 

Complete guide to all jQuery selector types.

##  Files

- `index.html` - Main HTML file
- `styles.css` - External stylesheet
- `script.js` - External JavaScript
- `README.md` - Documentation

##  Topics Covered

1. Basic Selectors (*, element, #id, .class)
2. Attribute Selectors ([attribute], [attribute=value])
3. Position Selectors (:first, :last, :even, :odd, :eq())
4. Child & Relationship Selectors
5. Form Selectors (:input, :text, :checkbox, :checked, :disabled)
6. Visibility Selectors (:visible, :hidden)
7. Content Selectors (:contains, :empty, :has)

##  Selector Reference

### Basic Selectors
```javascript
$("*")          // All elements
$("p")          // All <p> elements
$("#test")      // Element with id="test"
$(".intro")     // All class="intro"
```

### Attribute Selectors
```javascript
$("[href]")              // Elements with href attribute
$("[type='text']")       // Elements with type="text"
$("[href^='https']")     // href starts with "https"
$("[href$='.pdf']")      // href ends with ".pdf"
```

### Position Selectors
```javascript
$("p:first")    // First <p>
$("p:last")     // Last <p>
$("p:even")     // Even <p> (0,2,4...)
$("p:odd")      // Odd <p> (1,3,5...)
$("p:eq(2)")    // <p> at index 2
```

### Child Selectors
```javascript
$("div > p")         // Direct children
$("p:first-child")   // First child
$("p:last-child")    // Last child
```

### Form Selectors
```javascript
$(":input")      // All input elements
$(":text")       // Text inputs
$(":checkbox")   // Checkboxes
$(":checked")    // Checked elements
$(":disabled")   // Disabled elements
```

### Visibility Selectors
```javascript
$(":visible")    // Visible elements
$(":hidden")     // Hidden elements
```

### Content Selectors
```javascript
$(":contains('text')")   // Contains text
$(":empty")              // Empty elements
$("div:has(p)")          // Contains <p>
```

##  Dependencies

jQuery 3.7.1 (CDN)


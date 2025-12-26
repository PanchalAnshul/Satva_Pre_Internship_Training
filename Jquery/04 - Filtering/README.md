# jQuery 04 - Traversing Filtering 📘

JQuery filtering methods to navigate and filter DOM elements.

##  Files

- `index.html` - Main HTML file
- `styles.css` - External stylesheet
- `script.js` - External JavaScript
- `README.md` - Documentation

##  Topics Covered

1. `first()` - First element
2. `last()` - Last element
3. `eq()` - Element at index
4. `filter()` - Match criteria
5. `not()` - Exclude elements
6. `has()` - Contains child elements
7. `is()` - Check if matches
8. `slice()` - Range of elements
9. `map()` - Transform elements
10. Method Chaining

##  Filtering Methods

### first()
```javascript
$("div").first()  // Returns first div
```

### last()
```javascript
$("div").last()   // Returns last div
```

### eq(index)
```javascript
$("p").eq(2)      // Element at index 2
$("p").eq(-1)     // Last element
```

### filter(selector)
```javascript
$("p").filter(".intro")    // Match class
$("p").filter(":even")     // Even elements
```

### not(selector)
```javascript
$("div").not(".special")   // Exclude class
$("div").not(":first")     // Exclude first
```

### has(selector)
```javascript
$("div").has("p")          // Contains <p>
$("ul").has("li.active")   // Contains <li> with class
```

### is(selector)
```javascript
$("#test").is(".active")   // Returns true/false
$("p").is(":visible")      // Check if visible
```

### slice(start, end)
```javascript
$("div").slice(1, 4)    // Index 1 to 3
$("div").slice(2)       // From index 2 to end
$("div").slice(-3)      // Last 3 elements
```

### map(function)
```javascript
$("input").map(function() {
    return $(this).val();
}).get();
```

### Method Chaining
```javascript
$("p").filter(".intro").first()
$("div").not(":first").slice(0, 2)
$("p").filter(":visible").eq(2)
```

##  Dependencies

jQuery 3.7.1 (CDN)

##  Interactive Demos

 10 filtering methods  
 Visual highlighting  
 Method chaining examples  
 Reset buttons  
 Summary reference table  


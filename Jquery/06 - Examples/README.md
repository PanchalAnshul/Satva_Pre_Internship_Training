# jQuery Practical Examples

A comprehensive hands-on project demonstrating essential jQuery methods and concepts.

## What's Included

This project covers all the fundamental jQuery concepts with interactive examples:

### 1. **Selectors & Events**
- ID selector (`#btnClick`)
- Class selector (`.btnHover`)
- Click and hover events

### 2. **Show/Hide Effects**
- `toggle()` - Toggle visibility with animation
- `fadeToggle()` - Fade in/out animation

### 3. **Text, Value & Attributes**
- `val()` - Get/set input values
- `text()` - Get/set text content
- `attr()` - Get/set element attributes

### 4. **Append & Remove**
- `append()` - Add new elements dynamically
- `remove()` - Remove elements from DOM

### 5. **CSS Manipulation**
- `css()` - Change inline styles dynamically
- `toggleClass()` - Add/remove CSS classes

### 6. **Parent, Child & Traversing**
- `first()` - Select first element
- `last()` - Select last element
- `eq()` - Select element by index (0-based)
- `parent()` - Select parent element
- `children()` - Working with child elements

### 7. **Filtering**
- `:even` - Filter even-indexed elements
- `:odd` - Filter odd-indexed elements
- Custom filtering logic

## Key jQuery Concepts Demonstrated

**Syntax**: `$(selector).action()`
- `$` - jQuery object
- `selector` - Find HTML elements
- `action()` - Perform action on elements

**Common Selectors**:
- `#id` - Select by ID
- `.class` - Select by class
- `element` - Select by tag name
- `parent > child` - Direct child selector

**Event Handling**:
```javascript
$('#element').click(function() {
    // Code here
});
```

**Method Chaining**:
```javascript
$('#element').css('color', 'red').fadeIn().addClass('active');
```

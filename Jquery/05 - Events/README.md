# jQuery Event Methods - Practical 5

## Overview
This practical demonstrates various jQuery event methods as covered in W3Schools jQuery Event Methods tutorial.

## Topics Covered

### 1. Click Events
- `click()` - Single click event
- `dblclick()` - Double click event
- Visual feedback on button clicks

### 2. Mouse Events
- `mouseenter()` - When mouse enters element
- `mouseleave()` - When mouse leaves element
- `mousemove()` - Track mouse position
- Dynamic styling on hover

### 3. Keyboard Events
- `keypress()` - When a key is pressed
- `keyup()` - When a key is released
- `keydown()` - When a key is pressed down
- Character counting and input validation

### 4. Form Events
- `focus()` - When input receives focus
- `blur()` - When input loses focus
- `change()` - When input value changes
- `submit()` - Form submission handling
- Form validation

### 5. Toggle Events
- `slideToggle()` - Smooth toggle animation
- Dynamic button text changes
- Show/hide content

### 6. Event Delegation
- `on()` - Attach events with delegation
- Works with dynamically added elements
- Delete functionality for list items

## Key Concepts

### Event Handling Methods
```javascript
// Basic click event
$("#element").click(function() {
    // code
});

// Multiple events with on()
$("#element").on({
    mouseenter: function() { },
    mouseleave: function() { }
});

// Event delegation
$("#parent").on("click", ".child", function() {
    // Works on dynamically added children
});
```

### Preventing Default Behavior
```javascript
$("form").submit(function(e) {
    e.preventDefault(); // Stops form submission
});
```

### Event Object Properties
- `e.which` - Key code of pressed key
- `e.key` - Character of pressed key
- `e.pageX`, `e.pageY` - Mouse coordinates

## Features Demonstrated

1. **Interactive Buttons** - Click and double-click responses
2. **Mouse Tracking** - Real-time coordinate display
3. **Keyboard Input** - Character counting and validation
4. **Form Handling** - Complete form validation flow
5. **Dynamic Content** - Add/remove list items
6. **Visual Feedback** - Animations and color changes
7. **Event Delegation** - Efficient event handling

## Common jQuery Event Methods

- **Mouse Events**: click, dblclick, mouseenter, mouseleave, hover
- **Keyboard Events**: keypress, keydown, keyup
- **Form Events**: submit, change, focus, blur, select
- **Document Events**: ready, load, resize, scroll
- **Event Binding**: on, off, one, trigger

## Notes

- Always use `$(document).ready()` to ensure DOM is loaded
- Use `e.preventDefault()` to stop default behaviors
- Event delegation is efficient for dynamic content
- The `on()` method is versatile for multiple event types
- Modern browsers support all these event methods

---

# jQuery 02 - Syntax 📘

##  Files

- `index.html` - Main HTML file
- `styles.css` - External CSS stylesheet
- `script.js` - External JavaScript file
- `README.md` - Documentation

##  Topics Covered

1. Basic jQuery Syntax
2. Document Ready Event
3. jQuery Selectors (Element, ID, Class)
4. Special Selectors (:first, :last, :even, :odd)
5. $(this) Selector
6. Common jQuery Actions
7. Syntax Summary

##  Basic Syntax
```javascript
$(selector).action()

// Examples
$("p").hide()         // Element selector
$("#test").hide()     // ID selector
$(".demo").hide()     // Class selector
$(this).hide()        // Current element
```

##  Document Ready
```javascript
// Full syntax
$(document).ready(function(){
  // jQuery code here
});

// Shorthand
$(function(){
  // jQuery code here
});
```

##  Selectors Demonstrated

| Selector | Example | Description |
|----------|---------|-------------|
| `*` | `$("*")` | All elements |
| `element` | `$("p")` | All &lt;p&gt; elements |
| `#id` | `$("#test")` | Element with id="test" |
| `.class` | `$(".demo")` | Elements with class="demo" |
| `:first` | `$("p:first")` | First &lt;p&gt; element |
| `:last` | `$("p:last")` | Last &lt;p&gt; element |
| `:even` | `$("p:even")` | Even &lt;p&gt; elements |
| `:odd` | `$("p:odd")` | Odd &lt;p&gt; elements |

##  jQuery Methods Used

- `css()` - Apply CSS styles
- `hide()` - Hide elements
- `show()` - Show elements
- `toggle()` - Toggle visibility
- `fadeOut()` - Fade out effect
- `slideUp()` - Slide up effect
- `text()` - Get/set text content
- `html()` - Get/set HTML content

##  How to Run

1. Make sure all files are in the same folder
2. Open `index.html` in a web browser
3. Click buttons to see jQuery in action

##  Dependencies

- jQuery 3.7.1 (CDN)
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
```

##  Interactive Demos

1.  Element Selector Demo
2.  ID Selector Demo
3.  Class Selector Demo
4.  Special Selectors (:first, :last, :even, :odd)
5.  $(this) Keyword Demo
6.  jQuery Methods (hide, show, toggle, fade, slide, text, html)


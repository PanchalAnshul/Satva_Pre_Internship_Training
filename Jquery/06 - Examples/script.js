$(document).ready(function() {
    
    // ========== SELECTORS & EVENTS ==========
    
    // Click event with ID selector
    $('#btnClick').click(function() {
        $('#output').text('Button was clicked! Time: ' + new Date().toLocaleTimeString());
    });
    
    // Hover event with class selector
    $('.btnHover').hover(
        function() {
            $(this).text('You are hovering!');
        },
        function() {
            $(this).text('Hover Over Me');
        }
    );

    // ========== SHOW/HIDE ==========
    
    // Toggle visibility
    $('#btnToggle').click(function() {
        $('#box').toggle(500);
    });
    
    // Fade toggle
    $('#btnFade').click(function() {
        $('#box').fadeToggle(800);
    });

    // ========== TEXT, VAL & ATTRIBUTES ==========
    
    // Get input value with val()
    $('#btnGetVal').click(function() {
        var inputValue = $('#nameInput').val();
        if (inputValue) {
            $('#displayText').text('Hello, ' + inputValue + '!');
        } else {
            $('#displayText').text('Please enter your name first!');
        }
    });
    
    // Set text with text()
    $('#btnSetText').click(function() {
        $('#displayText').text('Text changed using .text() method!');
    });
    
    // ========== APPEND & REMOVE ==========
    
    var itemCount = 2;
    
    // Append new items
    $('#btnAddItem').click(function() {
        itemCount++;
        $('#itemList').append('<li>Item ' + itemCount + '</li>');
    });
    
    // Remove last item
    $('#btnRemoveLast').click(function() {
        $('#itemList li:last').remove();
    });

    // ========== CSS MANIPULATION ==========
    
    // Change CSS with css()
    $('#btnChangeColor').click(function() {
        $('#cssBox').css({
            'background-color': '#' + Math.floor(Math.random()*16777215).toString(16),
            'color': 'white',
            'font-weight': 'bold',
            'padding': '25px'
        });
    });
    
    // Toggle class
    $('#btnAddClass').click(function() {
        $('#cssBox').toggleClass('highlight');
    });

    // ========== PARENT, CHILD & TRAVERSING ==========
    
    // first() - select first child
    $('#btnHighlightFirst').click(function() {
        $('.child').removeClass('highlight');
        $('#parentBox .child').first().addClass('highlight');
    });
    
    // last() - select last child
    $('#btnHighlightLast').click(function() {
        $('.child').removeClass('highlight');
        $('#parentBox .child').last().addClass('highlight');
    });
    
    // eq() - select specific index (0-based)
    $('#btnHighlightEq').click(function() {
        $('.child').removeClass('highlight');
        $('#parentBox .child').eq(1).addClass('highlight');
    });
    
    // parent() - select parent element
    $('#btnParentStyle').click(function() {
        $('.child').first().parent().css({
            'border': '3px dashed #ff5722',
            'background': '#ffebee'
        });
    });

    // ========== FILTERING ==========
    
    // Filter even items
    $('#btnFilterEven').click(function() {
        $('#filterList li').removeClass('highlight');
        $('#filterList li:odd').addClass('highlight');
    });
    
    // Filter odd items
    $('#btnFilterOdd').click(function() {
        $('#filterList li').removeClass('highlight');
        $('#filterList li:even').addClass('highlight');
    });
    
    // Reset filtering
    $('#btnResetFilter').click(function() {
        $('#filterList li').removeClass('highlight');
    });

});
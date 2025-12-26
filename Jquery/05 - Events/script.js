$(document).ready(function() {
    
    // 1. CLICK EVENTS
    // Single Click Event
    $("#clickBtn").click(function() {
        $("#clickResult").text("Button was clicked at " + new Date().toLocaleTimeString());
        $(this).css("background", "#27ae60");
        setTimeout(() => {
            $(this).css("background", "#667eea");
        }, 500);
    });

    // Double Click Event
    $("#dblClickBtn").dblclick(function() {
        $("#clickResult").text("Button was double-clicked!");
        $(this).animate({
            fontSize: "18px",
        }, 200).animate({
            fontSize: "16px",
        }, 200);
    });

    // 2. MOUSE EVENTS
    let mouseEnterCount = 0;
    let mouseLeaveCount = 0;

    // mouseenter event
    $("#mouseBox").mouseenter(function() {
        mouseEnterCount++;
        $(this).css({
            "background": "linear-gradient(135deg, #f093fb, #f5576c)",
            "transform": "scale(1.05)"
        });
        $("#mouseResult").html(`<strong>Mouse Entered!</strong> Enter count: ${mouseEnterCount}`);
    });

    // mouseleave event
    $("#mouseBox").mouseleave(function() {
        mouseLeaveCount++;
        $(this).css({
            "background": "linear-gradient(135deg, #667eea, #764ba2)",
            "transform": "scale(1)"
        });
        $("#mouseResult").html(`<strong>Mouse Left!</strong> Leave count: ${mouseLeaveCount}`);
    });

    // mousemove event - track mouse position
    $("#mouseBox").mousemove(function(e) {
        let offset = $(this).offset();
        let x = Math.round(e.pageX - offset.left);
        let y = Math.round(e.pageY - offset.top);
        $(this).text(`X: ${x}, Y: ${y}`);
    });

    // 3. KEYBOARD EVENTS
    // keypress event
    $("#keyInput").keypress(function(e) {
        $("#keyResult").html(`<strong>Key Pressed:</strong> ${e.key} (Code: ${e.which})`);
    });

    // keyup event - show typed text
    $("#keyInput").keyup(function() {
        let text = $(this).val();
        if (text.length > 0) {
            $("#keyResult").html(`<strong>You typed:</strong> ${text} (${text.length} characters)`);
        } else {
            $("#keyResult").text("Start typing...");
        }
    });

    // keydown event - prevent numbers
    $("#keyInput").keydown(function(e) {
        if (e.which >= 48 && e.which <= 57) {
            e.preventDefault();
            $("#keyResult").html('<strong style="color: red;">Numbers are not allowed!</strong>');
        }
    });

    // 4. FORM EVENTS
    // focus event
    $("#nameInput, #emailInput").focus(function() {
        $(this).addClass("highlight");
    });

    // blur event
    $("#nameInput, #emailInput").blur(function() {
        $(this).removeClass("highlight");
    });

    // change event
    $("#nameInput, #emailInput").change(function() {
        console.log("Input changed:", $(this).val());
    });

    // submit event
    $("#myForm").submit(function(e) {
        e.preventDefault(); // Prevent form submission
        
        let name = $("#nameInput").val();
        let email = $("#emailInput").val();
        
        if (name && email) {
            $("#formResult").html(`<strong>Form Submitted!</strong><br>Name: ${name}<br>Email: ${email}`);
            $("#formResult").css("display", "block");
            
            // Clear form
            $(this)[0].reset();
        } else {
            $("#formResult").html('<strong style="color: red;">Please fill all fields!</strong>');
        }
    });

    // 5. TOGGLE & BIND EVENTS
    // toggle event
    $("#toggleBtn").click(function() {
        $("#toggleContent").slideToggle(400);
        $(this).text($("#toggleContent").is(":visible") ? "Hide Content" : "Show Content");
    });

    // Initially hide toggle content
    $("#toggleContent").hide();

    // 6. EVENT DELEGATION
    // Using on() for event delegation - works on dynamically added elements
    let itemCount = 2;
    
    $("#addItem").click(function() {
        itemCount++;
        $("#itemList").append(`
            <li>Item ${itemCount} <button class="deleteBtn">Delete</button></li>
        `);
    });

    // Event delegation - this will work on dynamically added buttons
    $("#itemList").on("click", ".deleteBtn", function() {
        $(this).parent().fadeOut(300, function() {
            $(this).remove();
        });
    });


    // BONUS: Multiple Events with on()
    $("#focusInput").on({
        mouseenter: function() {
            $(this).css("border-color", "#4CAF50");
        },
        mouseleave: function() {
            $(this).css("border-color", "#ddd");
        }
    });

    // Log all events for learning
    console.log("jQuery Event Methods Practice loaded!");
    console.log("Available events demonstrated:");
    console.log("- click(), dblclick()");
    console.log("- mouseenter(), mouseleave(), mousemove()");
    console.log("- keypress(), keyup(), keydown()");
    console.log("- on() for event delegation");
    console.log("- slideToggle() for animations");
    
});
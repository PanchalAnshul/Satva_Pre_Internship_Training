$(function() {
  // Example 1: Element Selector
  $("#selectElement").click(function () {
    $("p.test-element").css({
      background: "#d4edda",
      border: "2px solid #28a745",
    });
  });

  $("#resetElement").click(function () {
    $("p.test-element").css({
      background: "",
      border: "2px dashed #ddd",
    });
  });

  // Example 2: ID Selector
  $("#selectId").click(function () {
    $("#uniqueElement").css({
      background: "#fff3cd",
      color: "#856404",
      "font-weight": "bold",
    });
  });

  $("#resetId").click(function () {
    $("#uniqueElement").css({
      background: "",
      color: "",
      "font-weight": "",
    });
  });

  // Example 3: Class Selector
  $("#selectClass").click(function () {
    $(".demo").css({
      background: "#cfe2ff",
      color: "#084298",
      padding: "10px",
    });
  });

  $("#resetClass").click(function () {
    $(".demo").css({
      background: "",
      color: "",
      padding: "",
    });
  });

  // Example 4: Special Selectors
  $("#selectFirst").click(function () {
    $(".selector-demo").css("background", "");
    $(".selector-demo:first").css("background", "#d4edda");
  });

  $("#selectLast").click(function () {
    $(".selector-demo").css("background", "");
    $(".selector-demo:last").css("background", "#f8d7da");
  });

  $("#selectEven").click(function () {
    $(".selector-demo").css("background", "");
    $(".selector-demo:even").css("background", "#cfe2ff");
  });

  $("#selectOdd").click(function () {
    $(".selector-demo").css("background", "");
    $(".selector-demo:odd").css("background", "#fff3cd");
  });

  $("#resetSpecial").click(function () {
    $(".selector-demo").css("background", "");
  });

  // Example 5: $(this) Demo
  $(".thisDemo").click(function () {
    $(this).css({
      background: "#28a745",
      transform: "scale(1.1)",
    });
    $("#thisResult")
      .text("You clicked: " + $(this).text())
      .show();

    setTimeout(function () {
      $(".thisDemo").css({
        background: "",
        transform: "",
      });
    }, 1000);
  });

  // Example 6: Actions/Methods
  $("#hideAction").click(function () {
    $("#actionDemo").hide();
  });

  $("#showAction").click(function () {
    $("#actionDemo").show();
  });

  $("#toggleAction").click(function () {
    $("#actionDemo").toggle();
  });

  $("#fadeAction").click(function () {
    $("#actionDemo").fadeOut();
  });

  $("#slideAction").click(function () {
    $("#actionDemo").slideUp();
  });

  $("#textAction").click(function () {
    $("#actionDemo").text("Text changed using .text() method!");
  });

  $("#htmlAction").click(function () {
    $("#actionDemo").html(
      "<strong>HTML changed using .html() method!</strong>"
    );
  });

  $("#resetAction").click(function () {
    $("#actionDemo").show().slideDown().fadeIn();
    $("#actionDemo")
      .text("This text will be modified by jQuery methods")
      .css("background", "");
  });
});

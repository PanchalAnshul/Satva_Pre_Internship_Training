$(document).ready(function () {
  // Example 1: Hide Text
  $("#hideBtn").click(function () {
    $("#demoText").hide();
  });

  // Example 2: Show Text
  $("#showBtn").click(function () {
    $("#demoText").show();
  });

  // Example 3: Change Text
  $("#changeBtn").click(function () {
    $("#changeText").text("Text changed using jQuery!");
  });

  // Example 4: Add CSS Style
  $("#styleBtn").click(function () {
    $("#styleText").css({
      "background-color": "#fff3cd",
      color: "#856404",
      "font-weight": "bold",
    });
  });

  // Example 5: Get Content
  $("#getBtn").click(function () {
    var content = $("#contentText").text();
    $("#result")
      .text("Content retrieved: " + content)
      .show();
  });
});

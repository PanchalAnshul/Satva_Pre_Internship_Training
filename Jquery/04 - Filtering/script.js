$(function() {
    
    // 1. first() Method
    $("#btn1").click(function() {
        $(".box").removeClass("highlight-selected");
        $(".box").first().addClass("highlight-selected");
    });
    $("#reset1").click(function() {
        $(".box").removeClass("highlight-selected");
    });

    // 2. last() Method
    $("#btn2").click(function() {
        $(".item").removeClass("highlight-selected");
        $(".item").last().addClass("highlight-selected");
    });
    $("#reset2").click(function() {
        $(".item").removeClass("highlight-selected");
    });

    // 3. eq() Method
    $("#btn3").click(function() {
        $(".para").removeClass("highlight-selected");
        $(".para").eq(2).addClass("highlight-selected");
    });
    $("#btn4").click(function() {
        $(".para").removeClass("highlight-selected");
        $(".para").eq(0).addClass("highlight-selected");
    });
    $("#btn5").click(function() {
        $(".para").removeClass("highlight-selected");
        $(".para").eq(-1).addClass("highlight-selected");
    });
    $("#reset3").click(function() {
        $(".para").removeClass("highlight-selected");
    });

    // 4. filter() Method
    $("#btn6").click(function() {
        $(".text").removeClass("highlight-selected");
        $(".text").filter(".intro").addClass("highlight-selected");
    });
    $("#btn7").click(function() {
        $(".text").removeClass("highlight-selected");
        $(".text").filter(":odd").addClass("highlight-selected");
    });
    $("#reset4").click(function() {
        $(".text").removeClass("highlight-selected");
    });

    // 5. not() Method
    $("#btn8").click(function() {
        $(".element").removeClass("highlight-selected");
        $(".element").not(".special").addClass("highlight-selected");
    });
    $("#btn9").click(function() {
        $(".element").removeClass("highlight-selected");
        $(".element").not(":first").addClass("highlight-selected");
    });
    $("#reset5").click(function() {
        $(".element").removeClass("highlight-selected");
    });

    // 6. has() Method
    $("#btn10").click(function() {
        $(".container-box").removeClass("highlight-selected");
        $(".container-box").has("p").addClass("highlight-selected");
    });
    $("#btn11").click(function() {
        $(".container-box").removeClass("highlight-selected");
        $(".container-box").has("span").addClass("highlight-selected");
    });
    $("#reset6").click(function() {
        $(".container-box").removeClass("highlight-selected");
    });

    // 7. is() Method
    $("#btn12").click(function() {
        var result = $("#test1").is(".active");
        $("#result1").text("Result: " + result + " - #test1 has class 'active'").show();
    });
    $("#btn13").click(function() {
        var result = $("#test2").is(".active");
        $("#result1").text("Result: " + result + " - #test2 does NOT have class 'active'").show();
    });

    // 8. slice() Method
    $("#btn14").click(function() {
        $(".num").removeClass("highlight-selected");
        $(".num").slice(1, 4).addClass("highlight-selected");
    });
    $("#btn15").click(function() {
        $(".num").removeClass("highlight-selected");
        $(".num").slice(2).addClass("highlight-selected");
    });
    $("#btn16").click(function() {
        $(".num").removeClass("highlight-selected");
        $(".num").slice(-3).addClass("highlight-selected");
    });
    $("#reset7").click(function() {
        $(".num").removeClass("highlight-selected");
    });

    // 9. map() Method
    $("#btn17").click(function() {
        var values = $(".fruit").map(function() {
            return $(this).val();
        }).get();
        $("#result2").text("Values: " + values.join(", ")).show();
    });
});
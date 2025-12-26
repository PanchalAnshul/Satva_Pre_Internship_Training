$(function() {
    
    // Section 1: Basic Selectors
    $("#btn1").click(function() {
        $(".item").addClass("highlight");
    });
    $("#btn1").click(function() {
        $(".item2").addClass("highlight");
    });
    $("#btn2").click(function() {
        $("#special").addClass("highlight");
    });
    
    $("#btn3").click(function() {
        $(".item").addClass("highlight");
    });
    
    $("#reset1").click(function() {
        $(".item").removeClass("highlight");
    });
     $("#reset1").click(function() {
        $(".item2").removeClass("highlight");
    });


    // Section 2: Attribute Selectors
    $("#btn4").click(function() {
        $("[type='text']").css({
            "background": "#fff3cd",
            "border": "2px solid #ffc107"
        });
    });
    
    $("#btn6").click(function() {
        $("[type='email']").css({
            "background": "#fff3cd",
            "border": "2px solid #ffc107"
        });
    });
    
    $("#btn5").click(function() {
        $("[type]").css({
            "background": "#cfe2ff",
            "border": "2px solid #0d6efd"
        });
    });
    
    $("#reset2").click(function() {
        $("input").css({
            "background": "",
            "border": "1px solid #ddd"
        });
    });

    // Section 3: Position Selectors
    $("#btn111").click(function() {
        $(".pos").removeClass("highlight");
        $("#id1:first").addClass("highlight");
    });
    
    $("#btn7").click(function() {
        $(".pos").removeClass("highlight");
        $(".pos:last").addClass("highlight");
    });
    
    $("#btn8").click(function() {
        $(".pos").removeClass("highlight");
        $(".pos:odd").addClass("highlight");
    });
    
    $("#btn9").click(function() {
        $(".pos").removeClass("highlight");
        $(".pos:even").addClass("highlight");
    });
    
    $("#btn10").click(function() {
        $(".pos").removeClass("highlight");
        $(".pos:eq(1)").addClass("highlight");
    });
    
    $("#reset3").click(function() {
        $(".pos").removeClass("highlight");
    });

    // Section 4: Child Selectors
    $("#btn11").click(function() {
        $(".child").removeClass("highlight");
        $("#parent p:first-child").addClass("highlight");
    });
    
    $("#btn12").click(function() {
        $(".child").removeClass("highlight");
        $("#parent p:last-child").addClass("highlight");
    });
    
    $("#btn13").click(function() {
        $("#parent > p").addClass("highlight");
    });
    
    $("#reset4").click(function() {
        $(".child").removeClass("highlight");
    });

    // Section 5: Form Selectors
    $("#btn14").click(function() {
        $("input").css({"background": "", "border": "1px solid #ddd"});
        $(":text").css({
            "background": "#d4edda",
            "border": "2px solid #28a745"
        });
    });
    
    $("#btn15").click(function() {
        $(":checkbox").css({
            "transform": "scale(1.5)",
            "margin": "10px"
        });
    });
    
    $("#btn16").click(function() {
        $("input").css({"background": "", "border": "1px solid #ddd"});
        $(":disabled").css({
            "background": "#f8d7da",
            "border": "2px solid #dc3545"
        });
    });
    
    $("#reset5").click(function() {
        $("input").css({
            "background": "",
            "border": "1px solid #ddd",
            "transform": "",
            "margin": "5px"
        });
    });

    // Section 6: Visibility Selectors
    $("#btn17").click(function() {
        $(".vis").removeClass("highlight");
        $(".vis:visible").addClass("highlight");
    });
    
    $("#btn18").click(function() {
        $(".vis:hidden").show().addClass("highlight");
    });
    
    $("#reset6").click(function() {
        $(".vis").removeClass("highlight");
        $(".vis:eq(1)").hide();
    });

    // Section 7: Content Selectors
    $("#btn19").click(function() {
        $(".content").removeClass("highlight");
        $(".content:contains('jQuery')").addClass("highlight");
    });
    
    $("#btn20").click(function() {
        $(".content").removeClass("highlight");
        $(".content:empty").addClass("highlight").text("[Empty]");
    });
    
    $("#reset7").click(function() {
        $(".content").removeClass("highlight");
        $(".content:eq(3)").text("");
    });

});
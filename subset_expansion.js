$(document).ready(function() {
    $("a").click(function() {
        $("div.hide").toggleClass("hide");
        if($("div.hide").attr("class")!="hide") {
                $(this).text("Show Less")
                
            }
        else
            {
                $(this).text("Show More")
            }
    });
});

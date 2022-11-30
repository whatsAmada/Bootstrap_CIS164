"use strict"

$(document).ready(()=> {
    $("image_list a").each( (index, link) => {
        const image = new Image();
        image.src = link.href;
    });
    
    
    $("#image_list a").click( evt => {
        const link = evt.currentTarget;
        
        //change image
        $("#image").attr("src", link.href);
        
        //change caption
        $("#caption").text(link.title);
        
        //cancel default action
        evt.preventDefault();
    });
    
    //focus on first link
    $("li:first-child a").focus();
    
    
});
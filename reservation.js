"use strict";

$(document).ready( () => {

    //statement that moves the focus to Arrival Date    
$("arrival_date").focus();    
    
$("#reservation_form").submit (event => {
    let isValid = true;
    
    //validation for email entry
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    const email = $("#email").val().trim();
    if (email == "") {
        $("#email").next().text ("A value must be entered into each text box.");
        isValid = false;
    }  
    else if (!emailPattern.test(email) ) {
        $("#email").next().text("Must be a valid email address.");
        isValid = false;
    }
    else {
        $("#email").next().text("");
    }
$("#email").val(email);

    //validation for number of nights entry
    const nights = $("#nights").val().trim();
    if (nights == "") {
        $("#nights").next().text("Must be numeric.");
        isValid = false;
    }
     else if($("#nights").val()=="")
     {
 $("#nights").text("Enter nights");
    return false;
     }
    else if(isNaN($("#nights").val()))
     {
  $("#nights").text("Enter numeric nights");
    return false;
     }
    
    //validation for phone entry
    const phone = $("#phone").val().trim();
    if (phone == "") {
        $("#phone").next().text ("This field is required.");
        isValid = false;
    }  
    else if (!phonePattern.test(phone) ) {
        $("#phone").next().text("Must be a valid number.");
        isValid = false;
    }
    else {
        $("#phone").next().text("");
    }
$("#phone").val(phone);
    
    //prevent submission of form if entries are invalid
    if (isValid == false) {
        event.preventDefault();
    }
    
});
    
}); // end ready
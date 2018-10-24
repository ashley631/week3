"use strict";
$(document).ready(() => {                 
  let table = null; //declaring a variable called container and setting it to null
  $(document)
    .on("mouseenter", ".available", (event) => { //when mouse enters a table on a class of available, the table fades in  
      $(event.target).fadeTo(500, 0.5);  // google jquery method of fadeTo
    })
    .on("mouseleave", ".available", (event) => { // when mouse leaves, the opacity 
      $(event.target).fadeTo(500, 1);
    })
    .on("mouseenter", ".reserved", (event) => {  //when mouse is over and enters a table with a class of reserved, it changes the cursor to not allowed.
      $(event.target).css("cursor", "not-allowed");
      
      
    })
    .on("click", ".available", (event) => { // When you click on an availble table 
      $(".reserve-form").fadeIn(2000); //form fades in 
      $(".reserve-form").css("display", "flex"); //form is styled with a display of flex
      table = $(event.target); //setting the variable table to equal the specific table you are clicking on aka event.target 
      if (event.target.tagName === "P") { //if the table has a tag name equal to P, set that form text 
        $(".form-table-num").text(`Table Number: ${table.text()}`); //getting .text from form-table-num
      } else {
        $(".form-table-num").text(`Table Number: ${table.children().text()}`); //google .children
      }
    })
    .on("click", ".form-x, .form-save", (event) => {  //what happens when you click save on the form
      $(".reserve-form").fadeOut(2000);
      //$(".reserve-form").hide();
      if ($(event.target).hasClass("form-save")){ //form-save is the save button
    
        table 
        .attr("name" , $("input").eq(0).val())
        .attr("name" , $("input").eq(1).val())
        .attr("partysize" , $("input").eq(2).val());

        
        table.removeClass("available").addClass("reserved");
        $("input").each(function() {
          $(this).val("");
        })
        
        //when clicked, the save button will cause the form to fade out and adds a class a reserved, marking the table as reserved by removing the class of available..
      }
      
    })
      .on("mouseenter" , ".reserved" , (event) => { 
            if ($(event.target).attr("firstname") && $(event.target).attr("partysize")){
                $(event.target).append(`<section class="tooltip">
                First Name: ${$(event.target).attr("firstname")}
                Party Size: ${$(event.target).attr("partysize")}
                </section>`);

                document.on("mouseleave" , ".reserved" , (event)=> {
                  $(event.target).prepend(".tooltip");
                })
              }



          });
});

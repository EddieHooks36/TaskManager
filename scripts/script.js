
var importantIcon = "fa-solid fa-thumbs-up important";
var nonImportantIcon = "fa-solid fa-thumbs-down";

function toggleImportant(){
    console.log("Icon Clicked!")

    $("#iImportant").removeClass(nonImportantIcon);
    $("#btnToggleForm").addClass(importantIcon);

}

function toggleForm(){
    console.log("Button Clicked!");

    $(".form-container").toggle();
}

function init(){
    console.log("Task Manager");

    // loads data

    // assigns events
    $("#iImportant").click(toggleImportant);
    $("#btnToggleForm").click(toggleForm);

}

window.onload = init;

var importantIcon = "fa-solid fa-thumbs-up important";
var nonImportantIcon = "fa-solid fa-thumbs-down";
var isImportant = false;

function toggleImportant(){
    // console.log("Icon Clicked!")
    // change to non important
    if (isImportant){
        $("#iImportant").removeClass(importantIcon).addClass(nonImportantIcon);
    }
    else{
        // change to important
        $("#iImportant").removeClass(nonImportantIcon).addClass(importantIcon);
    isImportant = true;
    }

    

}

function toggleForm(){
    console.log("Button Clicked!");

    $(".form-container").toggle();
}
function saveTask(){
    console.log("Saving Task");
    let title = $("#txtTitle").val(); // read the text control
    let description = $("#txtDescription").val(); // read the description
    let dueDate = $("#selDueDate").val();
    let category = $("#selCategory").val();
    let contact = $("#txtContact").val();
    let status = $("#selStatus").val();

    let task = new Task(title, description, dueDate, category, contact, status, isImportant);
    //save logic

    //display logic
    displayTask(task); //calling the task
}
function displayTask(task){
     let syntax = `<div class="task">
        <div>
            <h3>${task.title}</h3>
            <p>${task.description}</p>
        </div>

        <div>
            <label>${task.dueDate}</label>
            <label>${task.category}</label>
        </div>
    
        <div>
            <label>${task.contact}</label>
            <label>${task.status}</label>
        </div>

    </div>`
     $(".list-container").append(syntax);
}
function init(){
    console.log("Task Manager");

    // loads data

    // assigns events
    $("#iImportant").click(toggleImportant);
    $("#btnToggleForm").click(toggleForm);
    $("#btnSave").click(saveTask);

}

window.onload = init;
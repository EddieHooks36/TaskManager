
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
    $.ajax({
         type: "POST",
         url:"https://fsdiapi.azurewebsites.net/api/tasks",
         data: JSON.stringify(task),
         contentType: "application/json",
         success: function(res){
             console.log(res); //res is a JSON string

               //display logic
             displayTask(task); //calling the task
         },
         error: function(error){
            console.log(error);

            alert("Unexpected Error")
         }
    }); 
}
function clearForm(){
    $("#txtTitle").val("");
    $("#txtDescription").val("");
    $("#selDueDate").val("");
    $("#selCategory").val("");
    $("#txtContact").val("");
    $("#selStatus").val("");
}

function displayTask(task){
     let syntax = `<div class="task">
        <div class="col1">
            <h3>${task.title}</h3>
            <p>${task.description}</p>
        </div>

        <div class="col2">
            <label>${task.dueDate}</label>
            <label>${task.category}</label>
        </div>
    
        <div class="col3">
            <label>${task.contact}</label>
            <label>${task.status}</label>
        </div>

    </div>`
     $(".list-container").append(syntax);
}
function testRequest(){
    $.ajax({
        type: "GET",
        url:"https://fsdiapi.azurewebsites.net/",
        success: function(response){
            console.log(response);

        },
        error: function(error){
            console.log(error);
        }
    });
}
function loadTasks(){
    $.ajax({
        type: "GET",
        url: "https://fsdiapi.azurewebsites.net/api/tasks",
        success: function(res){
            let data = JSON.parse(res); //will parse the JSON string into JS objects
            console.log(data);
            for(let i=0; i<data.length; i++){
                let task = data[i]; //get every object
                
                if(task.name  == "Eddie"){
                displayTask(task);
            }
            }
        },
        error: function(error){
            console.log(error);
        }

    })
   
}
function init(){
    console.log("Task Manager");

    // loads data
    loadTasks();

    // assigns events
    $("#iImportant").click(toggleImportant);
    $("#btnToggleForm").click(toggleForm);
    $("#btnSave").click(saveTask);

}

window.onload = init;
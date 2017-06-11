$(document).ready(function() {
    $("add-new-todo-button").click(function(){
        // Assign the to do description and pomodoro estimate to variables
        var todoBlock = $(this).closest("#new-todo-block")
        var description = todoBlock.find("#new-todo-description")
        var pomodoroEstimate = todoBlock.find("#new-pomodoro-estimate")
        
        // Append the new ro do to the list of to dos
        $('#myTable tr:last').append("<tr><td><input type='checkbox'/></td><td>" + description.val() + "</td><td>time needed</td><td>" + <span class='pomodoro-estimate'> + pomodoroEstimate.val() + "</span></td><td>time needed</td></tr>")
        
        // Clear the input fields for new-todo-description and pomodoro-estimate by entering an empty string as the value 
          description .val("")
          pomodoroEstimate.val("")
    })
})
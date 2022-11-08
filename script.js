function startClock() {
    $('#clock').children('h2').text(dayjs().format("dddd, MMMM D h:mm:ss"))
    var ClockInterval = setInterval(function () {
        $('#clock').children('h2').text(dayjs().format("dddd, MMMM D h:mm:ss"))
    }, 1000)
}

startClock()

$(function () {
    $("#datepicker").datepicker();
});

$("#button").on("click", addProject)
var projects = []
function addProject() {

    //get user input from text input fields
    var name = $("#input").val()
    var type = $("#inputGroupSelect02").val()
    var date = $("#datepicker").val()
    //create object to store project name and type
    var project = {
        name: name,
        type: type,
        date: date
    }
    //push project objects into global array of projects
    projects.push(project);
    //convert array of project objects into string first then save in local storage
    localStorage.setItem("project", JSON.stringify(projects))
    //get array of objects containing projects
    projects = JSON.parse(localStorage.getItem("project"));
    //If there arent any projects then 
    if (projects === null) {
        //just set projects to an empty array
        projects = []
        //otherwise, if there are projects, 
        //For each project object in the array called projects:
    } else {
        for (var i = 0; i < projects.length; i++) {
            //inject a row into table body
            $("tbody").append(
                "<tr><th>" + projects[i].name + "</th><td>" + projects[i].type + "</td><td>" + projects[i].date + "</td></tr>"
            )
        }
    }
}




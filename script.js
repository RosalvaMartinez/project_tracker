function startClock() {
    $('#clock').children('h2').text(dayjs().format("dddd, MMMM D h:mm:ss"))
    var ClockInterval = setInterval(function () {
        $('#clock').children('h2').text(dayjs().format("dddd, MMMM D h:mm:ss"))
    }, 1000)
}

startClock()
loadProjects()

$(function () {
    $("#datepicker").datepicker();
});

$("#button").on("click", addProject)
var projects = []
function addProject() {

    //get user input from text input fields
    var name = $("#input").val()
    var type = $("#inputGroupSelect02").val()
    //create object to store project name and type
    var project = {
        name: name,
        type: type
    }
    //push project objects into global array of projects
    projects.push(project);
    //convert array of project objects into string first then save in local storage
    localStorage.setItem("projects", JSON.stringify(projects))
    //Call load projects to update Table component with newly added project
    loadProjects()
}

function loadProjects () {
    //Get "projects" from localStorage
    projects = JSON.parse(localStorage.getItem("projects"));
    //If there are no previous projects (projects === null)
    if(!projects) {
        //Set the global array of projects to null
        projects = []
    } else { //Otherwise, load projects from localStorage into Table Component
        //For each "project" object in the global array of projects
        for(var i in projects) {
            //Append a <tr> elements to <tbody>
            $('tbody').append(
                '<tr>' +
                '<th>' + projects[i].name + '</th>' +
                '<td>' + projects[i].type + '<td>' +
                '</tr>'
            )
        }
    }
}




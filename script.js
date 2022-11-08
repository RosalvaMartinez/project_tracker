function startClock () {
    $('#clock').children('h2').text(dayjs().format("dddd, MMMM D h:mm:ss"))
    var ClockInterval = setInterval(function () {
        $('#clock').children('h2').text(dayjs().format("dddd, MMMM D h:mm:ss"))
    }, 1000)
}

startClock()

$( function() {
    $( "#datepicker" ).datepicker();
  } );

  $("#button").on("click", addProject)
  var projects = []
  function addProject () {
    //get user input from text input fields
   var name = $("#input").val()
   var type = $("#inputGroupSelect02")
   //create object to store project name and type
   var ptoject = {
       name: name,
       type: type
  }
   //push project objects into global array of projects
   projects.push(project);
   //convert array of project objects into string first then save in local storage
   localStorage.setItem("project", JSON.stringify(projects))

   projects = JSON.parse(localStorage.getItem("project"));
}
  


   
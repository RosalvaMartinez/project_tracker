function startClock () {
    $('#clock').children('h2').text(dayjs().format("dddd, MMMM D h:mm:ss"))
    var ClockInterval = setInterval(function () {
        $('#clock').children('h2').text(dayjs().format("dddd, MMMM D h:mm:ss"))
    }, 1000)
}

startClock()


function startClock () {
    var ClockInterval = setInterval(function () {
        $('#clock').children('h1').text(dayjs().format("dddd, MMMM D h:mm:ss"))
    }, 1000)
}

startClock()


let daysTable = document.querySelector('.diasTxt')
let hoursTable = document.querySelector('.horasTxt')
let minutesTable = document.querySelector('.minutosTxt')
let secondsTable = document.querySelector('.segundosTxt')

function startTimer(duration) {

    let timer = duration;

    function calcTimer() {

        let days = parseInt(timer /24 /60 /60 %60, 10);
        let hours = parseInt(timer /60 /60 %60, 10);
        let minutes = parseInt(timer / 60 %60, 10);
        let seconds = parseInt(timer % 60, 10);

        days = days < 10 ? "0" + days : days;
        hours = hours < 10? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10? "0" + seconds : seconds;

        daysTable.innerHTML = days
        hoursTable.innerHTML = hours
        minutesTable.innerHTML = minutes
        secondsTable.innerHTML = seconds

    }

    calcTimer() 

    setInterval (() => {

        calcTimer()       

        if (--timer < 0) {
            timer = duration;
        }
     
    }, 1000)
    
}

window.onload = () => {
    let duration = 854522; // Conversão para segundos

    startTimer(duration)
}

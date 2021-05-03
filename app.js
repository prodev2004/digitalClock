const hoursHTML = document.querySelector('.hours');
const minutesHTML = document.querySelector('.minutes'); 
const secondsHTML = document.querySelector('.seconds'); 
const pa = document.querySelector('.p-a');

setInterval(() => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours > 12) {
        pa.innerHTML = 'pm';
        hours = 1;
    }

    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }

    hoursHTML.innerHTML = hours;
    minutesHTML.innerHTML = minutes;
    secondsHTML.innerHTML = seconds;
}, 1000)

// BOOM NOW WE HAVE A FULLY FUNCTIONAL DIGITAL CLOCK
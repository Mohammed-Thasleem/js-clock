const hour = document.querySelector('.hour-hand')
const minute = document.querySelector('.min-hand')
const second = document.querySelector('.second-hand')

function setTime() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentSecond = currentTime.getSeconds();

    const hourPosition = currentHour * 360 / 12 + ((currentMinute * 360 / 60) / 12) + 90;
    const minutePosition = (currentMinute * 360 / 60) + ((currentSecond * 360 / 60) / 60) + 90;
    const secondPosition = (currentSecond * 360 / 60) + 90;

    // const hourPosition = 30 * currentHour + currentMinute / 2 + 90; //converting current time
    // const minutePosition = (6 * currentMinute) + 90;
    // const secondPosition = (6 * currentSecond) + 90;

    hour.style.transform = `rotate(${hourPosition}deg)`;
    minute.style.transform = `rotate(${minutePosition}deg)`;
    second.style.transform = `rotate(${secondPosition}deg)`;
}

setInterval(setTime, 1000);

setTime();

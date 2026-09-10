const secondHand = document.querySelector<HTMLElement>('.second-hand');
const minuteHand = document.querySelector<HTMLElement>('.min-hand');
const hourHand = document.querySelector<HTMLElement>('.hour-hand');

function setDate() {
    const date = new Date();

    const seconds = date.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;

    const minutes = date.getMinutes();
    const minutesDegrees = (minutes / 60) * 360 + 90;

    const hours = date.getHours();
    const hoursDegrees = (hours / 12) * 360 + 90;

    if (!secondHand || !minuteHand || !hourHand) return;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();
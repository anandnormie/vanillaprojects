const hourEl = document.getElementById("hours");
const minEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const ampmel = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let ampm = "AM";

    if (h >= 12) {
        h = h - 12;
        ampm = "PM";
    }

    hourEl.innerText = h;
    minEl.innerText = m;
    secondsEl.innertext = s;
    ampmel.innertext = ampm;
}
updateClock();
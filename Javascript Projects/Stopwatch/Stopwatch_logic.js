var millisecond = 0;
var second = 0;
var minute = 0;
var hour = 0;
var Interval;

function Timer() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

function startTimer () {
    millisecond++;
    if (millisecond <= 9) {
        document.getElementById("ms").innerHTML = "0" + millisecond;
    }
    if (millisecond > 9) {
        document.getElementById("ms").innerHTML = millisecond;
    }
    if (millisecond > 99) {
        second++;
        millisecond = 0;
        document.getElementById("ms").innerHTML = "0" + millisecond;
        document.getElementById("s").innerHTML = "0" + second;
    }
    if (second > 9) {
        document.getElementById("s").innerHTML = second;
    }
    if (second > 59) {
        minute++;
        second = 0;
        millisecond = 0;
        document.getElementById("ms").innerHTML = "0" + millisecond;
        document.getElementById("s").innerHTML = "0" + second;
        document.getElementById("min").innerHTML = "0" + minute;
    }
    if (minute > 9) {
        document.getElementById("min").innerHTML = minute;
    }
    if (minute > 59){
        hour++
        second = 0;
        millisecond = 0;
        minute = 0;
        document.getElementById("ms").innerHTML = "0" + millisecond;
        document.getElementById("s").innerHTML = "0" + second;
        document.getElementById("min").innerHTML = "0" + minute;
        document.getElementById("hr").innerHTML = "0" + hour;
    }
    if (hour > 9) {
        document.getElementById("hr").innerHTML = hour;
    }
}

function Stop() {
    clearInterval(Interval)
}

function Reset () {
    millisecond = 0;
    second = 0;
    minute = 0;
    hour = 0;
    document.getElementById("ms").innerHTML = "0" + millisecond;
    document.getElementById("s").innerHTML = "0" + second;
    document.getElementById("min").innerHTML = "0" + minute;
    document.getElementById("hr").innerHTML = "0" + hour;
}
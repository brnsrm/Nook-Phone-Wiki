function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    h = checkTimeDigits(h);
    m = checkTimeDigits(m);
    document.getElementById("time").innerHTML = h + ":" + m;
    setTimeout(startTime, 1000);
}

function checkTimeDigits(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
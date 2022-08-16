let stopEl = document.getElementById("stop-el")
let countEl = document.getElementById("count-el")
let count = 0

function start() {
    count += 1
    countEl.textContent = count
}

function stop() {
    let countStr = count + " - "
    stopEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

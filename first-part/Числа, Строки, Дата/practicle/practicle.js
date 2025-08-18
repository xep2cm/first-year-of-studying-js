let mode = 'date'
const fullBtn = document.getElementById('full');
const dateBtn = document.getElementById('date');
const timeBtn = document.getElementById('time');
const outputElement = document.getElementById('output');

function bindMode(name) {
    return function() {
        mode = name
        update()
    }
}

fullBtn.onclick = bindMode('full')
dateBtn.onclick = bindMode('date')
timeBtn.onclick = bindMode('time') 

setInterval(update, 1000)
update()

function update() {
    outputElement.textContent = format(mode)
}

// Pure Function
function format(formatMode) {
    const now = new Date()

    switch (formatMode) {
        case 'time' : return now.toLocaleTimeString();
        case 'date' : return now.toLocaleDateString();
        case 'full' : return now.toLocaleDateString() + ' ' + now.toTimeString();
        default: return now.toLocaleTimeString()
    }
}
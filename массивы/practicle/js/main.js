const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')


createBtn.addEventListener('click', function () {
    addTask()
})

function addTask() {
    if (inputElement.value === '') {
        alert('Введите задачу')
    } else {
        let li = document.createElement('li')
        li.innerHTML = inputElement.value
        listElement.appendChild(li)
        let span = document.createElement('span')
        span.inner = '\u00d7'
        li.appendChild(span)
    }

    inputElement.value = '';
    saveData()
}

listElement.addEventListener('click', function (e) {

    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked') 
        saveData
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        saveData
    }
})

function saveData () {
    localStorage.setItem('data', listElement.innerHTML)
}
function showData () {
    listElement.innerHTML = localStorage.getItem('data')
}

showData();

const notes = [
    {
    title: 'записаться к врачу',
    completed: false,
    },
    {
    title: 'записаться к врачу',
    completed: false,
    },
    {
    title: 'записаться к врачу',
    completed: false,
    }
]

function render() {

}
render()
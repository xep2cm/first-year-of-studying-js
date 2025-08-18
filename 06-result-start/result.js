/**
const car = {
    model: 'Tesla',
    year: 2023,
}

const json = JSON.stringify(car)
// console.log(json)
const parsed = JSON.parse(json)
// console.log(parsed)
 */

// main.js

const list = document.getElementById('list');
const filter = document.getElementById('filter');
let USERS = [];

filter.addEventListener('input', (event) => {
    const value = event.target.value.toLowerCase()
    const filteredUsers = USERS.filter((user) => {
        return (
            user.firstName.toLowerCase().includes(value.toLowerCase()) ||
            user.lastName.toLowerCase().includes(value.toLowerCase())
        );
    });
    render(filteredUsers);
});

async function start() {
    list.innerHTML = `Loading Users...`;
    try {
        const resp = await fetch('https://dummyjson.com/users');
        const data = await resp.json();
        setTimeout(() => {
            USERS = data.users;
            render(USERS); // Важно брать именно массив users
        }, 2000);
    } catch (err) {
        list.style.color = 'red';
        list.innerHTML = err.message;
    }
}

function render(users = []) {
    if (users.length === 0) {
        list.innerHTML = `No users`
    } else {
        const html = users.map(toHTML);
        list.innerHTML = html.join('');
    }
}

function toHTML(user) {
    return `
        <li class="list-group-item">${user.firstName} ${user.lastName}</li>
    `;
}

start();
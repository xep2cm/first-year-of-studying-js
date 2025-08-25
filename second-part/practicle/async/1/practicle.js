const btn = document.getElementById('name-btn');
const output = document.getElementById('output');

btn.addEventListener('click', () => {
    let userName = prompt('Введите ваше имя');

    if(userName && userName.trim()) { 

        setTimeout(() => {
            output.textContent = `Привет, ${userName}!`;
        }, 1000);
    }
});
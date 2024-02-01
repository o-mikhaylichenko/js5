// функция,которая преобразует часы в секунды
const convertEl = document.querySelector('.convert')
const generateEl = document.querySelector('.generatePassword')

function convert(hour) {
    return hour * 3600;
}

const second = +prompt('Введите количество часов');

convertEl.addEventListener('click', function () {
    console.log(`${second} ч равно ${convert(second)} секунд`);
})

// функция, которая генерирует случайный пароль заданной длины
function generatePass(len) {
    let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=';
    let password = '';
    for (let i = 0; i < len; i++) {
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    return password;
}

const lengthPassword = +prompt('Введите необходимую длину пароля');

generateEl.addEventListener('click', function () {
    console.log(`Сгенерирован пароль ${generatePass(lengthPassword)}`);
})
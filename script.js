/*Задание 1
1. Поиск в интернете (бесплатные api примеры).
2. Найти любые данные, на произвольную тему.
3. Создать файл data.js.
4. Создать переменную которая будет хранить данные из публичных api.

Задание 2
1. Создать файл index.html.
2. Подключить data.js.
3. Сформировать контент из данных (картинка загловок и параграф).
4. Добавить данный контент в вёрстку.
5. * Добавить стили при необходимости (по желанию).*/

data = JSON.parse(dogs);
console.log(data);

const divDogs = document.querySelector('.dogs');
data.forEach(element => {
    divDogs.insertAdjacentHTML('beforeend',`
    <div class="imgDog">
    <img src="${element.message}"
    
</div>
    `
    )
});
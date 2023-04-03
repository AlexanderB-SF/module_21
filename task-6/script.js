// Получение элементов с HTML
const inputPage= document.querySelector('#num-1'),
      inputLimit = document.querySelector('#num-2'),
      button = document.querySelector('#button'),
      message = document.querySelector('.message'),
      blockImg = document.querySelector('.block-img'),
      min = 1, max = 10,
      frazeCompleted = 'Изображения по вашему запросу:';

// Проверка, если есть данные в localStorage, 
// То подгружаем картинки из последнего успешно выполненного запроса,
// Если пользователь перезагрузил страницу
if (localStorage.getItem('pageNum') && localStorage.getItem('limitNum')) {
    generateGallery(localStorage.getItem('pageNum'), localStorage.getItem('limitNum'));
}
// При клике на кнопку отправляется запрос
button.addEventListener('click', () => {
    // Получение данных из инпутов
    const limitValue = inputLimit.value,
          pageValue = inputPage.value;
    // Проверка на корректность диапазона 1 - 10
    if ((limitValue < min || limitValue > max || limitValue === '') && (pageValue < min || pageValue > max || pageValue === '')) {
        blockImg.innerHTML = '';
        message.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
    } else if (min > pageValue || pageValue > max || pageValue === '') {
        blockImg.innerHTML = '';
        message.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
    } else if (min > limitValue || limitValue > max || limitValue === '') {
        blockImg.innerHTML = '';
        message.innerHTML = 'Лимит вне диапазона от 1 до 10';
    } else {
        // Если диапазон страниц и лимита корректный
        // Данные записываются в localStorage
        // И запускается функция отправки и обработки ответа запроса
        message.innerHTML = frazeCompleted;
        blockImg.innerHTML = '';
        localStorage.setItem('pageNum', pageValue);
        localStorage.setItem('limitNum', limitValue);
        generateGallery(pageValue, limitValue);
    }

});
// Функция отправки и обработки ответа запроса   
function generateGallery(pageValue, limitValue) {
    fetch(`https://picsum.photos/v2/list?page=${pageValue}&limit=${limitValue}`)
    .then ((response) => {
        return response.json();
    })
    .then ((data) => {
        for (let i = 0; i < data.length; i++) {
            const img = document.createElement('img');
            img.setAttribute('src', data[i].download_url);
            img.classList.add('img-item');
            blockImg.append(img);
        }
    })
    .catch (() => {
        message.innerHTML = 'Произошла ошибка при обработке данных';
    })
}
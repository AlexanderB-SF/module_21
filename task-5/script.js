// Получение элементов с HTML
const getNumber = document.querySelector('#num'),
      getButton = document.querySelector('#button'),
      getTitle = document.querySelector('.title'),
      listTask = document.querySelector('.list-task');

// При  клике по кнопке отправляется запрос
getButton.addEventListener('click', () => {
    // Получение введенного номера 
    const id = getNumber.value;
    // Отправка запроса
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
    .then((response) => {
        // Преобразование ответа в JSON
        return response.json();
    })
    .then((data) => {
        // Проверка наличия id в ответе запроса
        return new Promise((resolve, reject) => { data.length ? resolve(data) : reject(); })
    })
    .then((data) => {
        // Если id найден запускается функция генерации списка
        generateList(data, id);
    })
    .catch(() => {
        // Если id не найден выводится сообщение об этом
        listTask.innerHTML = '';
        getTitle.innerText = `Пользователь с указанным id: ${id} не найден`;
    });
});

// Функция генерации списка задач
function generateList(data, id) {
    listTask.innerHTML = '';
    getTitle.innerText = `Список задач пользователя с id: ${id}`;
    // Циклом обходим массив и создаем список
    for (let i = 0; i < data.length; i++) {
        const listTaskItem = document.createElement("li");
        listTaskItem.innerHTML = data[i].title;
        listTask.appendChild(listTaskItem);
        // Если задача выполнена, то данное задание выводится зачеркнутым
        if (data[i].completed) { listTaskItem.style.textDecoration='line-through'; };
    }
}



const min = 1,
      max = 100,
      num = random(min, max),
      flag = (num % 2 === 0),
      generateFraze = " Сгенерированное число: ";

const randomNumber = new Promise((resolve, reject) => {
    setTimeout(() => { flag ? resolve("Завершено успешно.") : reject("Завершено с ошибкой."); }, 3000);
});

randomNumber
    .then((result) => { console.log(result + generateFraze + num); })
    .catch((error) => { console.log(error + generateFraze + num); })

function random (min, max) {
    const number = Math.round(Math.random() * (max - min) + min);
    return number;
};
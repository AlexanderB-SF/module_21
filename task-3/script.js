const today = new Date;
const fullDate = today.toLocaleDateString("ru-RU") + " в " + today.toLocaleTimeString("ru-RU").slice(0,-3);

if (localStorage.getItem("name")) {
    alert(`Добрый день, ${localStorage.getItem("name")}! Давно не виделись. В последний раз вы были у нас ${localStorage.getItem("visitTime")}`);
    localStorage.setItem("visitTime", fullDate);
} else {
    localStorage.setItem("name", prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя: "));
    localStorage.setItem("visitTime", fullDate);
}

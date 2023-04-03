// Создание экземпляра класса DOMParser
const parser = new DOMParser();

// XML, который мы будем парсить
const xmlString = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>
`;
// Парсинг XML
const xmlDom = parser.parseFromString(xmlString, "text/xml");
// Получаем родительский элемент
const listDom = xmlDom.querySelector('list');
// Создание объекта для данных
let listObj = {list: {}};
// Обход двух экземпляров коллеции 'student' 
// B получение данных
function getDate (obj) {
    for (let item of listDom.querySelectorAll('student')) {
        const name = item.querySelector('name');
        const langAttr = name.getAttribute('lang');
        const firstName = name.querySelector('first').textContent;
        const secondName = name.querySelector('second').textContent;
        const age = item.querySelector('age').textContent;
        const proffesion = item.querySelector('prof').textContent;
    
        personeGenerate (obj, langAttr, firstName, secondName, age, proffesion);
    };
    return obj;
};
getDate(listObj.list);

// Создание объекта 'student_' в объекте 'listObj.list'
function personeGenerate (obj, lang, first, second, age, prof) {
    obj[`student_${lang}_lang`] = {
        lang: lang,
        first: first,
        second: second,
        age: age,
        prof: prof,
    };
    return obj;
};


console.log(listObj);
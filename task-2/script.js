const personObj = {
    name: "Anton",
    age: 36,
    skills: ["Javascript", "HTML", "CSS"],
    salary: 80000
};
const personJson = JSON.stringify(personObj);
console.log(personJson);
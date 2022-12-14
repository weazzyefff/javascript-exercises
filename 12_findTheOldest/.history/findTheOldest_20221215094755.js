const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]
//console.log(people[0].name);
const date = new Date().getFullYear();
console.log(date);


const findTheOldest = function (people) {
    let age = 0;
    let oldestAge = 0;
    let oldestPerson = null;
    for (let person of people) {
        if (person.yearOfDeath < date) {
            age = person.yearOfDeath - person.yearOfBirth;
            if (age > oldestAge) {
                oldestAge = age;
                oldestPerson = person;
            }
        }

    }
    return oldestPerson;

}

function getAge(people) {


}

console.log(getAge(people));

// Do not edit below this line
module.exports = findTheOldest;

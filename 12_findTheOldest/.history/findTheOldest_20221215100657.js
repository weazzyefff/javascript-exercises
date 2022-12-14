const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        
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
        if (person.yearOfDeath) {
            age = person.yearOfDeath - person.yearOfBirth;
            if (age > oldestAge) {
                oldestAge = age;
                oldestPerson = person;
            }
        } else if (age > oldestAge) {
        }
    }
    return oldestPerson;
}

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;

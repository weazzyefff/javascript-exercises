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

const findTheOldest = function (people) {


}

function getAge(people) {
    let age = [];
    for (let person of people) {
         age = person.yearOfDeath - person.yearOfBirth;
    }
    return age;

}

console.log(getAge(people));

// Do not edit below this line
module.exports = findTheOldest;

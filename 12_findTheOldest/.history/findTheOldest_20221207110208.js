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

const findTheOldest = function (people) {
    inVal = 0;
    const oldest = people.reduce((total, person) => {
        return total + (person.yearOfDeath - person.yearOfBirth),
        inVal;
    });
}
console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;

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
    const ordered = people.sort((a, b) => a.yearOfBirth > b.yearOfBirth ? 1 : -1);
    console.table(ordered);
};
console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;

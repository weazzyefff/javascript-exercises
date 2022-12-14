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
console.log(people[0].name);

const findTheOldest = function(people){
    for (let key in people) {
        console.table(key);
    }
    
}
findTheOldest(people);
function getAge() {

}

// Do not edit below this line
module.exports = findTheOldest;

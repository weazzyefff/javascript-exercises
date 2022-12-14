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

const findTheOldest = function(people) {
    
    
}
console.log(getAge(people));
findTheOldest(people);

function getAge(people) {
let age = 0;
    for (let key in people) {
        return people.yearOfDeath - yearOfBirth
       
   }
}

// Do not edit below this line
module.exports = findTheOldest;

let findTheOldest = function(people) {
    let peopleWithTheirAge = [];
    people.map(person => {

        let deathYear = person.yearOfDeath == undefined ? 
            new Date().getFullYear() : person.yearOfDeath;

        let age = deathYear - person.yearOfBirth;
        peopleWithTheirAge.push({
            name: person.name,
            age: age,
        });
    });

    peopleWithTheirAge = peopleWithTheirAge.sort((p1, p2) => {
        return p1.age > p2.age ? -1 : 1;
    });

    return peopleWithTheirAge[0];
}

module.exports = findTheOldest

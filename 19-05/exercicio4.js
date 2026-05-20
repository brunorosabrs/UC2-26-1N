
const person = {
    name: 'Bruno',
    age: 29,
    favoriteMusicalGenre: 'eletronic music'
};

function newPerson(person) {
    const newPerson = {
        ...person,
        favoriteFood: ['Xis', 'Hot-Dog', 'Churrasco'],
        bestFriend: {
            name: 'Pedro',
            age: 26
        }
    };

    console.log(`O nome da pessoa é ${newPerson.name}, `+ 
        `e suas comidas preferidas são ${newPerson.favoriteFood[0]}, `+ 
        `${newPerson.favoriteFood[1]} e ${newPerson.favoriteFood[2]}. `+ 
        `O seu melhor amigo se chama ${newPerson.bestFriend.name} `+ 
        `e tem ${newPerson.bestFriend.age} anos.`);
}


newPerson(person);

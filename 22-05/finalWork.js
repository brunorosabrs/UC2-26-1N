const ask = require('readline-sync');


//CREATE CHARACTER:
function createCharacter() {

    console.log('==============================');
    console.log(' CHOOSE YOUR CLASS ')
    console.log('==============================');

    console.log(`
┌──────────────────────────────────────┐
│             STATUS                   │
├──────────────────────────────────────┤
│  Classe: WARRIOR                     │
│                                      │
│  ❤️  Health:  120                    │
│  🛡️  Defense: 20                     │
│  🧪  Potion:  3                      │
└──────────────────────────────────────┘
┌──────────────────────────────────────┐
│             STATUS                   │
├──────────────────────────────────────┤
│  Classe: BARBARO                     │
│                                      │
│  ❤️  Health:  160                    │
│  🛡️  Defense: 30                     │
│  🧪  Potion:  3                      │
└──────────────────────────────────────┘
┌──────────────────────────────────────┐
│             STATUS                   │
├──────────────────────────────────────┤
│  Classe: ARCHER                      │
│                                      │
│  ❤️  Health:  80                     │
│  🛡️  Defense: 15                     │
│  🧪  Potion:  3                      │
└──────────────────────────────────────┘
`);

    const playerName = ask.question('\nEnter your name: ');
    const classChoice = Number(ask.question('Choose your class: '));

    let selectedClass = null

    switch (classChoice) {

        case 1:
            selectedClass = warrior
            break

        case 2:
            selectedClass = guardian
            break

        case 3:
            selectedClass = berserker
            break

        default:
            console.log('\nInvalid class option!')
            return createCharacter()
    }

    const character = {
        name: playerName,
        className: selectedClass.className,
        health: selectedClass.health,
        defense: selectedClass.defense,
        potions: selectedClass.potions,
        attack: selectedClass.attack
    }

    console.log('\n==============================')
    console.log(`Welcome to Khazad-dûm, ${character.name}!`)
    console.log(`Class: ${character.className}`)
    console.log('==============================')

    return character
}

createCharacter()



















/*
let enemies = [
    {
        name: "Mine Goblin",
        health: 40,
        minDamage: 5,
        maxDamage: 10,
    },
    {
        name: "Moria Orc",
        health: 60,
        minDamage: 8,
        maxDamage: 15,
    },
    {
        name: "Cave Troll",
        health: 100,
        minDamage: 6,
        maxDamage: 20,
    },
    {
        name: "The Watcher in the Water",
        health: 90,
        minDamage: 9,
        maxDamage: 15,

    },
    {
        name: "Durin’s Bane",
        health: 87,
        minDamage: 7,
        maxDamage: 11,

    }

]
*/
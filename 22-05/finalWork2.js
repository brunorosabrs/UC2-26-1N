//import the readline-sync library:
const ask = require('readline-sync');


//Centers text in the terminal:
function centerText(text) {

    let terminalWidth = process.stdout.columns

    let padding = Math.floor((terminalWidth - text.length) / 2)

    if (padding < 0) {
        padding = 0
    }

    return " ".repeat(padding) + text
}


//Game Home Screen:
function showGameIntro() {
    console.clear();
    console.log(`               

                                                        ███████╗██╗  ██╗ █████╗ ██████╗  ██████╗ ██╗    ██╗███████╗
                                                        ██╔════╝██║  ██║██╔══██╗██╔══██╗██╔═══██╗██║    ██║██╔════╝
                                                        ███████╗███████║███████║██║  ██║██║   ██║██║ █╗ ██║███████╗
                                                        ╚════██║██╔══██║██╔══██║██║  ██║██║   ██║██║███╗██║╚════██║
                                                        ███████║██║  ██║██║  ██║██████╔╝╚██████╔╝╚███╔███╔╝███████║
                                                        ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚══╝╚══╝ ╚══════╝

                                                                 ███╗   ███╗ ██████╗ ██████╗ ██╗ █████╗
                                                                 ████╗ ████║██╔═══██╗██╔══██╗██║██╔══██╗
                                                                 ██╔████╔██║██║   ██║██████╔╝██║███████║
                                                                 ██║╚██╔╝██║██║   ██║██╔══██╗██║██╔══██║
                                                                 ██║ ╚═╝ ██║╚██████╔╝██║  ██║██║██║  ██║
                                                                 ╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝


                                                            ╔══════════════════════════════════════════════╗
                                                            ║        THE ANCIENT HALLS HAVE FALLEN...      ║
                                                            ╚══════════════════════════════════════════════╝

                                                                    Orcs, trolls and darkness now
                                                                       rule the kingdom beneath
                                                                            the mountain.

                                                                   Only one warrior can reclaim
                                                                               MORIA.

`);

ask.question(centerText('Press ENTER to start...'));
console.clear();

}


//Create Character:
function createCharacter() {

    const playerName = ask.question(centerText('Enter your name: '));
    console.clear();

    console.log(`
====================================
    CHOOSE YOUR CLASS
====================================

1 - Warrior
⚔️  Balanced melee fighter
❤️  Health: 120
🛡️  Defense: 8
⚔️  Damage: 12 - 20
🧪  Potions: 3

------------------------------------

2 - Guardian
🛡️  Heavy defensive tank
❤️  Health: 150
🛡️  Defense: 12
⚔️  Damage: 8 - 14
🧪  Potions: 2

------------------------------------

3 - Berserker
🔥  Brutal damage dealer
❤️  Health: 100
🛡️  Defense: 5
⚔️  Damage: 10 - 25
🧪  Potions: 4

====================================
`);


    let selectedClass = null;

    while (selectedClass === null) {
        const classChoice = Number(ask.question('Choose your class: '));
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
                console.log('\nInvalid class option! Try again.\n');
        }
    }


    let character = {
        name: playerName,
        className: selectedClass.className,
        health: selectedClass.health,
        defense: selectedClass.defense,
        potions: selectedClass.potions,
        attack: selectedClass.attack
    }

    console.clear();
    console.log('\n==============================')
    console.log(`Welcome to Khazad-dûm, ${character.name}!`)
    console.log(`Class: ${character.className}`)
    console.log('==============================')
    ask.question(`press ENTER to continue...`);

    return character
}


//Attack Functions For Each Class:
function warriorAttack() {

    console.log("⚒️ The Warrior smashes the enemy with a mighty strike!")

    let damage = Math.floor(Math.random() * 9) + 12

    return damage
}

function guardianAttack() {

    console.log("🛡️ The Guardian brings down his hammer like a mountain!")

    let damage = Math.floor(Math.random() * 7) + 8

    return damage
}

function berserkerAttack() {

    console.log("🔥 The Berserker enters a savage rage and strikes wildly!")

    let damage = Math.floor(Math.random() * 16) + 10

    return damage
}


//Select Random Enemy:
function generateEnemy(enemies) {
    
    let randomIndex = Math.floor(Math.random() * enemies.length);

    let selectedEnemy = { ...enemies[randomIndex] };

    return selectedEnemy;
}


//Apply Damage To The Enemy:
function attack(character, enemy) {

    let damage = character.attack()

    enemy.health = enemy.health - damage

    console.log(`You dealt ${damage} damage!`);
    console.log(`${enemy.name} has ${enemy.health} health left!`);
}


//Temporary Defense State:
function defend(character) {

    character.isDefending = true

    console.log('You are defending!')
}


//Restore Character's Health:
function usePotion(character) {

    if (character.potions > 0) {

        character.health = character.health + 40

        character.potions = character.potions - 1

        console.log('You used a potion!')
        console.log(`Health: ${character.health}`)
        console.log(`Potions left: ${character.potions}`)

    } else {

        console.log('You have no potions left!')

    }
}


//Combat Menu:
function combatMenu() {

    console.log(`
========================
⚔️ COMBAT TURN ⚔️
========================

1 - Attack
2 - Defend
3 - Use Potion

========================
`)

    let option = Number(ask.question('Choose an action: '))

    return option
}


//Combat Control:
function startCombat(character, enemy) {

    console.log(`\nAn enemy appeared: ${enemy.name}!`)

    while (character.health > 0 && enemy.health > 0) {

        console.log(`\n${character.name} Health: ${character.health}`)
        console.log(`${enemy.name} Health: ${enemy.health}`)

        let option = combatMenu()

        switch (option) {

            case 1:
                attack(character, enemy)
                break

            case 2:
                defend(character)
                break

            case 3:
                usePotion(character)
                break

            default:
                console.log('Invalid option!')
        }

        if (enemy.health > 0) {

            enemyAttack(character, enemy)

        }
    }

    if (character.health > 0) {

        console.log(`\nYou defeated ${enemy.name}!`)

    } else {

        console.log('\nGame Over!')
    }
}


//Enemies Attack:
function enemyAttack(character, enemy) {

    let damage = Math.floor(Math.random() * (enemy.maxDamage - enemy.minDamage + 1)) + enemy.minDamage

    if (character.isDefending === true) {

        damage = Math.floor(damage / 2)

        character.isDefending = false

        console.log('You defended part of the attack!')
    }

    character.health = character.health - damage

    if (character.health < 0) {
    character.health = 0
}

    console.log(`\n${enemy.name} attacked you!`)
    console.log(`You received ${damage} damage!`)
    console.log(`Your health is now ${character.health}`)
}




//Class structure / Class attributes:
let warrior = {
    className: 'Warrior',
    health: 120,
    defense: 8,
    potions: 3,
    attack: warriorAttack
}

let guardian = {
    className: 'Guardian',
    health: 150,
    defense: 12,
    potions: 2,
    attack: guardianAttack
}

let berserker = {
    className: 'Berserker',
    health: 100,
    defense: 5,
    potions: 4,
    attack: berserkerAttack
}


//Enemy array:
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


//Main Loop:
showGameIntro();
let character = createCharacter();

let defeatedEnemies = 0

while (character.health > 0 && defeatedEnemies < 5) {

    let enemy = generateEnemy(enemies)

    startCombat(character, enemy)

    if (character.health > 0) {

        defeatedEnemies = defeatedEnemies + 1

        console.log(`Enemies defeated: ${defeatedEnemies}/5`)
    }
}

if (character.health > 0) {

    console.log('\n🏆 You reclaimed Khazad-dûm!')

} else {

    console.log('\n💀 The darkness of Moria consumed you...')
}

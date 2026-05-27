//Import The Readline-Sync Library:
const ask = require('readline-sync');


//Game Home Screen:
function showGameIntro() {
    console.clear();

    console.log(brown(`

                                                        ███████╗██╗  ██╗ █████╗ ██████╗  ██████╗ ██╗    ██╗███████╗
                                                        ██╔════╝██║  ██║██╔══██╗██╔══██╗██╔═══██╗██║    ██║██╔════╝
                                                        ███████╗███████║███████║██║  ██║██║   ██║██║ █╗ ██║███████╗
                                                        ╚════██║██╔══██║██╔══██║██║  ██║██║   ██║██║███╗██║╚════██║
                                                        ███████║██║  ██║██║  ██║██████╔╝╚██████╔╝██║██║ ██║███████║
                                                        ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝  ╚═════╝ ╚═╝╚═╝ ╚═╝╚══════╝

                                                                              ██████╗ ███████╗
                                                                             ██╔═══██╗██╔════╝
                                                                             ██║   ██║█████╗  
                                                                             ██║   ██║██╔══╝  
                                                                              ██████╔╝██║     
                                                                              ╚═════╝ ╚═╝     

                                                                 ███╗   ███╗ ██████╗ ██████╗ ██╗ █████╗
                                                                 ████╗ ████║██╔═══██╗██╔══██╗██║██╔══██╗
                                                                 ██╔████╔██║██║   ██║██████╔╝██║███████║
                                                                 ██║╚██╔╝██║██║   ██║██╔══██╗██║██╔══██║
                                                                 ██║ ╚═╝ ██║╚██████╔╝██║  ██║██║██║  ██║
                                                                 ╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝

`));

    ask.question(green(`                                                           
                                                                      Press ENTER to start...`));
    console.clear();

}


//Create Character:
function createCharacter() {
    console.log(brown(`


    
    
    
    
    
    
                                                                   Welcome to the abandoned mines of Moria!

                                                                    A new hero rises from the shadows...
                                                             
                                                             
                                                             
                                                             
                                                             
                                                             
                                                             
                                                             `));



    const playerName = ask.question(green(`
                                                                            Enter your name: `));
    console.clear();
    console.log(brown(`


        
        
                   
                                                                             CLASSES RELEASED

                                                                    ====================================
                                                                     
                                                                              ⚔️  WARRIOR ⚔️

                                                                    ====================================

                                                                   Forged in the heat of endless battles,
                                                                the Warrior is a master of steel and courage.
                                                            They stand firm even when darkness surrounds them.

                                                                   Balanced between attack and defense,
                                                                the Warrior is the perfect choice for those
                                                                    who seek honor, resilience and glory.

                                                                    ====================================

`));
    ask.question(green(`                                              
         
                                                                       Press ENTER to Next class`));
    console.clear();

    console.log(brown(`






                                                                   ====================================
                                                                    
                                                                            🛡️  GUARDIAN 🛡️
                                                
                                                                   ====================================

                                                                 The Guardian is an unbreakable defender,
                                                               trained to protect allies and hold the line
                                                                 against even the most terrifying enemies.

                                                                 With heavy armor and unmatched endurance,
                                                                 the Guardian survives battles that would
                                                                       destroy ordinary warriors.

                                                                   ====================================

`));
    ask.question(green(`
                                                                      Press ENTER to Next class`));
    console.clear();

    console.log(brown(`





                                                                   ====================================
                                                                     
                                                                           🔥 BERSERKER 🔥

                                                                   ====================================

                                                                 Driven by rage and the thirst for battle,
                                                                the Berserker fights with brutal strength
                                                                         and terrifying speed.

                                                                 Fearless and unpredictable, Berserkers
                                                                sacrifice defense for devastating attacks
                                                               capable of crushing any enemy in their path.

                                                                   ====================================

`));

    ask.question(green(`
                                                             
                                                                  Press ENTER to choose your class...`));
    console.clear();





    let selectedClass = null;

    while (selectedClass === null) {
        console.log(brown(`









                                      ====================================================================================================

                                                         1 - Warrior             2 - Guardian            3 - Berserker

                                                         Melee Fighter           Defensive Tank          Brutal Fighter
                                                         Health: 120             Health: 150             Health: 100
                                                         Defense: 8              Defense: 12             Defense: 5
                                                         Damage: 12 - 20         Damage: 8 - 14          Damage: 10 - 25
                                                         Potions: 3              Potions: 2              Potions: 4

                                      ====================================================================================================
`));
        let classChoice = Number(ask.question(green(`                         
                                                                           Choose your class: `)));
        console.clear();

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
                console.log(red('\nInvalid class option! Try again.\n'));
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

    console.log(brown(`
        
        






                                                                          ==============================
                                                                  
                                                                          Welcome to Khazad-dûm, ${character.name}!
                                                                      
                                                                                Class: ${character.className}
                                                                      
                                                                          ==============================
`));

    ask.question(green(`                                                    
                                                                           press ENTER to continue...`));
    console.clear();

    return character
}


//Combat Control:
function startCombat(character, enemy) {

    while (character.health > 0 && enemy.health > 0) {

        console.log(`

                                                                    ${red(enemy.name)} entered the fight!

                                                                    ${red(enemy.name)} Health: ${enemy.health}

                                                                    ${brown(character.name)} Health: ${character.health}

`);



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
                console.log(red('Invalid option!'));
        }

        if (enemy.health > 0) {

            enemyAttack(character, enemy)

        }
    }

    if (character.health > 0) {

        console.log(brown(`\nYou defeated ${enemy.name}!`))

    } else {

        console.log(red('\nGame Over!'))
    }
}


//Attack Functions Warrior:
function warriorAttack() {

    console.log("⚒️  The Warrior smashes the enemy with a mighty strike!");

    let damage = Math.floor(Math.random() * 9) + 12

    return damage
}


//Attack Functions Guardian:
function guardianAttack() {

    console.log("🛡️  The Guardian brings down his hammer like a mountain!");

    let damage = Math.floor(Math.random() * 7) + 8

    return damage
}


//Attack Functions Berserker
function berserkerAttack() {

    console.log("🔥  The Berserker enters a savage rage and strikes wildly!");

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

    let damage = character.attack();

    
    let critChance = Math.random() < 0.5;

    if (critChance) {
        damage = damage * 2;
        console.log(red("💥 CRITICAL HIT!"));
    }

    enemy.health = enemy.health - damage;

    if (enemy.health < 0) {
        enemy.health = 0;
    }

    console.log(`${green("You dealt")} ${red(damage)} ${green("damage!")}`);
    console.log(`${green(enemy.name)} ${green('remaining health:')} ${enemy.health}`);
}


//Temporary Defense State:
function defend(character) {

    character.isDefending = true

    console.log(green('You are defending!'));
}


//Restore Character's Health:
function usePotion(character) {

    if (character.potions > 0) {

        character.health = character.health + 40

        character.potions = character.potions - 1

        console.log(blue('You used a potion!'));
        console.log(green(`Health: ${character.health}`))
        console.log(green(`Potions left: ${character.potions}`))

    } else {

        console.log(red('You have no potions left!'));

    }
}


//Combat Menu:
function combatMenu() {

    console.log(`


                                                                         ${brown('========================')}
                                                                             ⚔️ ${brown(' COMBAT TURN')} ⚔️
                                                                         ${brown('========================')}

                                                                             ${red('1 - Attack')}

                                                                             ${green('2 - Defend')}

                                                                             ${blue('3 - Use Potion')}

                                                                         ${brown('========================')}
`)

    let option = Number(ask.question(green(`                                 
                                                                           Choose an action: `)))
    console.clear();

    return option
}


//Enemies Attack:
function enemyAttack(character, enemy) {

    let damage = Math.floor(Math.random() * (enemy.maxDamage - enemy.minDamage + 1)) + enemy.minDamage

    if (character.isDefending === true) {

        damage = Math.floor(damage / 2)

        character.isDefending = false

        console.log(green('You defended part of the attack!'));
    }

    character.health = character.health - damage

    if (character.health < 0) {
        character.health = 0
    }

    console.log(`\n${enemy.name} attacked you!`);
    console.log(`${green('You received')} ${red(damage)} ${green('damage!')}`);
    console.log(green(`${green('Your health is now:')} ${character.health}`));
}


//functions for colors:
function red(text) {
    return `\x1b[31m${text}\x1b[0m`;
}
function green(text) {
    return `\x1b[32m${text}\x1b[0m`;
}
function yellow(text) {
    return `\x1b[33m${text}\x1b[0m`;
}
function brown(text) {
    return `\x1b[38;5;94m${text}\x1b[0m`;
}
function blue(text) {
    return `\x1b[34m${text}\x1b[0m`;
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
        name: "Moria Beast",
        health: 87,
        minDamage: 7,
        maxDamage: 11,

    }

]


//Boss:
let finalBoss = {
    name: "Durin's Bane",
    health: 300,
    minDamage: 15,
    maxDamage: 35,
}






//Game Introduction:
showGameIntro();

//Main Loop:
let character = createCharacter();
let defeatedEnemies = 0

while (character.health > 0 && defeatedEnemies < 5) {

    let enemy = generateEnemy(enemies)

    startCombat(character, enemy)

    if (character.health > 0) {

        defeatedEnemies = defeatedEnemies + 1

        console.log(`Enemies defeated: ${defeatedEnemies}/5`);
    }
}

if (character.health > 0) {

    console.log(red(`
🔥 FINAL BOSS APPEARS!
`));

    startCombat(character, finalBoss);
}

if (character.health > 0) {

    console.log('\n🏆 You reclaimed Khazad-dûm!');

} else {

    console.log('\n💀 The darkness of Moria consumed you...');
}

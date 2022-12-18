
const Shaman = require("./characters/shaman");

const Warlock = require("./characters/warlock");

const Mage = require("./characters/mage");

const prompt = require("prompt-promise");




const config = require("./config/classNames");
const mobs = require("./mobs/mobs");

async function gameLoop() {
//in my game loop at the start i want to get the class choice from the user.
//they can pick shaman warlock or mage. 

//im going to store my character in this variable. once i pick a class, 
//i will create that class, and put it in the character variable.. 
let character; 

const classChoice = await prompt("Select your class: Shaman, Warlock, or Mage\n");
console.log("my class choice is", classChoice);
if(classChoice === config.classNames.MageClassName) {
character = new Mage("Diply");
} else if(classChoice === config.classNames.ShamanClassName) {
    character = new Shaman("Diply");
}else if(classChoice === config.classNames.WarlockClassName) {
    character = new Warlock("Diply");
} else {
    throw Error("you typed a class that doesn't exist!")
}

console.log(character)

//spawn a random mob, then lets prompt to fight it. 
//lets just take the first mob in the array, then if we beat it, we can fight the second one

let mob = mobs[0]; // this should be the goblin. mobs [1] should be the dragon
console.log("A wild " + mob.name + " appears");
console.log(mob.name + " has " + mob.health + " health");

while(character.health > 0 && mob.health > 0) {
    //while both my character and the mob im fighting both have health we fight. 
    //when one of them stop having health this block will stop running.
    console.log("Your character's spells: ");
    console.log(character.spells);

    const move = await prompt("Select a move; fight or spell\n")
    console.log("You selected: " + move);
    const damage = character.getDamage(move);
    console.log("You attack for " + damage);
    const mobDamage = mob.damage;
    console.log(mob.name + " hits you for " + mob.damage);
    mob.health = mob.health - damage;
    character.health = character.health = mobDamage;
    console.log("Your health is " + character.health);
    console.log(mob.name + "'s health is " + mob.health);
}

console.log("Fight over");
}

gameLoop();


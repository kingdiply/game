const Spell = require("../spells/spell");

class Character {
    constructor(name, className, attack, magic, defense, speed, health, mana) {
        this.name = name;
        this.className = className;
        this.level = 1;
        this.attack = attack;
        this.magic = magic;
        this.defense = defense;
        this.speed = speed;
        this.health = health;
        this.mana = mana;
        this.spells = [];
        this.weapons = [];
        this.activePet = null;
;        

    }

    levelUp() {
       this.level = this.level  + 1;
       if(this.className === "shaman") {
            console.log("levelling up", this.ClassName);
            this.attack = this.attack + 1;
            this.health = this.health + 11;
            this.mana = this.mana + 2;

       } else if(this.className === "mage") {
            console.log("levelling up", this.ClassName);
            this.mana = this.mana + 17;
            this.magic = this.magic +1;
        
       } else if(this.className === "warlock") {
            console.log("levelling up", this.ClassName);
            this.health = this.health = 29;
            this.mana = this.mana + 11;
            this.speed = this.speed + 1;

       }
    }
    getDamage() {
        // i need a way to keep track of a users active pet if they have one we get pets damage and add it to the
        //characters damage
        if(this.activePet) {
            const petDamage = this.activePet.damage;
            const magicDamage = this.magic;
            return petDamage + magicDamage;

        }
    }

    summonPet(petName) {
        //if we have a pet in our this.pets array this mather the name passed in as an argument to this func
        for(let i = 0; i < this.pets.length; i++) {
            const pet = this.pets[i];
            if(pet.name === petName) {
                this.activePet = pet;
            }
        }
    }
}

module.exports = Character;

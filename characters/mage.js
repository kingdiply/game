const Character = require("./character");
const fireball = require("../spells/fireball")

class Mage extends Character {
    constructor(name) {
        super(name, "mage", 2, 7, 3, 5, 50, 200);
            this.spells.push(fireball);
    }
}

module.exports = Mage;
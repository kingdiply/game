const Warlock = require("./characters/warlock");
const Shaman = require("./characters/shaman");
const Mage = require("./characters/mage");

const warlock = new Warlock("diply");
console.log(warlock);


const mage = new Mage("diply mage");
console.log(mage);

const shaman = new Shaman("diply shaman");
console.log(shaman);

shaman.levelUp();
console.log(shaman);

mage.levelUp();
console.log(mage);

warlock.summonPet("imp");
console.log(warlock);

shaman.summonPet("Fire Elemental");
console.log(shaman);

console.log(shaman.getDamage());

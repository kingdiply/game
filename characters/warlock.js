const Pet = require("./pet");
const Character = require("./character");


class Warlock extends Character{
    constructor(name) {
        super(name, "warlock", 3, 3, 7, 5, 200, 100);
        this.pets = [];
        const imp = new Pet("imp", 3);
        this.pets.push(imp);
       
    }
   
    
}




module.exports = Warlock;

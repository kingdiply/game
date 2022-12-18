const Pet = require("./pet");
const Character = require("./character");
const config = require('../config/classNames')


class Warlock extends Character{
    constructor(name) {
        super(name, config.classNames.WarlockClassName, 3, 3, 7, 5, 200, 100);
        this.pets = [];
        const imp = new Pet("imp", 3);
        this.pets.push(imp);
       
    }
   
    
}




module.exports = Warlock;

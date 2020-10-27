"use strict";

const Sweets = require("./sweets");

class Candy extends Sweets {
    constructor(name, manufacturer, weightGrams, caloriesPer100G, hasFilling) {
        super(name, manufacturer, weightGrams, caloriesPer100G);
        this.hasFilling = hasFilling;
    }
}

module.exports = Candy;
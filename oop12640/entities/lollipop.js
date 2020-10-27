"use strict";

const Sweets = require("./sweets");

class Lollipop extends Sweets {
    constructor(name, manufacturer, weightGrams, caloriesPer100G, taste) {
        super(name, manufacturer, weightGrams, caloriesPer100G);
        this.taste = taste;
    }
}

module.exports = Lollipop;
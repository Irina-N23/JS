"use strict";

const Lollipop = require("./entities/lollipop");
const Candy = require("./entities/candy");
const GiftBox = require("./entities/giftBox");

let sweetGift = new GiftBox("Happy New Year!");

const sweets = [
    new Lollipop("Chupa Chups", "Perfetti Van Melle Group", 123, 380, "yogurt"),
    new Lollipop("Sweetlee", "SweetShop", 100, 377, "grapefruit"), 
    new Candy("Lindor", "Lindt & Sprüngli AG", 250, 625, true), 
    new Candy("Bird's milk", "Kommunarka", 200, 450, false),
    new Candy("Truffles", "Kommunarka", 300, 569, false),
    new Candy("Tornado", "Kommunarka", 200, 441, false),
    new Candy("Duet", "Spartak", 230, 409, true),
    new Candy("Svityaz", "Spartak", 270, 561, false),
];

sweets.forEach(sweet => (sweetGift.addSweetToGiftBox(sweet)));

// common info:
sweetGift.printTotalWeightOfGift();
console.log(`The "${sweetGift.title}" gift box includes sweets below:\n`);
sweetGift.printGiftBoxContent();


// sweets can be sorted by various criteria:
const sortingParameters = {
    name: "name",
    manufacturer: "manufacturer",
    weight: "weight",
    calories: "caloriesPer100G"
}

sweetGift.sortSweetsByParameter(sortingParameters.name);
sweetGift.printGiftBoxContent();


// Here are some filters:
console.log("\n* SWEETS ARE FILTERED BY CHOSEN MANUFACTURER:");
sweetGift.printSweetsFilteredByManufacturer("Kommunarka");

console.log("\n* SWEETS ARE FILTERED BY CHOSEN WEIGHT RANGE:");
sweetGift.printSweetsFilteredByWeightRange(230, 100);
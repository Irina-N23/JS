"use strict";

const utilities = require("../utilities/utilities");

class GiftBox {
    constructor(title) {
        this.title = title;
        this.box = [];
    }

    addSweetToGiftBox(sweet) {
        this.box.push(sweet);
    }

    printGiftBoxContent() {
        utilities.printSweetsOf(this.box);
    }

    // rewritten function with method "Array.prototype.reduce()":
    printTotalWeightOfGift() {
        const reducer = (totalWeightGrams, sweet) => {
            return totalWeightGrams + sweet.weight;
        }

        console.log(`\nTotal weight of sweets in "${this.title}" box: `
                        + `${this.box.reduce(reducer, 0)} g.`);
    }

    // write function for sorting sweets by any allowed type of parameter:
    sortSweetsByParameter(parameter) {
        const anySweet = this.box.find(sweet => sweet[parameter]);

        if (typeof anySweet === "undefined") {
            throw new TypeError(`(!) Parameter "${parameter}" has not been `
                                + `specified for sweets. Available parameters:`
                                + ` name, manufacturer, weight, calories.\n`);
        }

        console.log(`\n- SWEETS ARE SORTED BY ${String(parameter).toUpperCase()}:`);

        switch (typeof anySweet[parameter]) {
            case "string":
                this.box.sort((sweetOne, sweetTwo) => {
                    if (sweetOne[parameter] > sweetTwo[parameter]) {
                        return 1;
                    }
                    if (sweetOne[parameter] < sweetTwo[parameter]) {
                        return -1;
                    }
                    return 0;
                });
            break;
            case "number":
                this.box.sort((sweetOne, sweetTwo) => {
                    return sweetOne[parameter] - sweetTwo[parameter];
                });
            break;
            default:
                console.error(`(!) Sorting has been failed.`);
            break;
       } 
    }

    printSweetsFilteredByManufacturer(manufacturer) {
        let sweetsOfChosenManufacturer = [];

        this.box.filter(sweet => {
            if (String(sweet.manufacturer).includes(manufacturer)) {
                sweetsOfChosenManufacturer.push(sweet);
            }
        });
        utilities.printSweetsOf(sweetsOfChosenManufacturer);
    }

    printSweetsFilteredByWeightRange(lowerBoundOfWeight, upperBoundOfWeight) {
        let sweetsOfChosenWeightRange = [];

        if (upperBoundOfWeight < lowerBoundOfWeight) {
            const permutationValue = lowerBoundOfWeight;
            lowerBoundOfWeight = upperBoundOfWeight;
            upperBoundOfWeight = permutationValue;
        }

        this.box.filter(sweet => {
            if (sweet.weight >= lowerBoundOfWeight 
                                    && sweet.weight <= upperBoundOfWeight) {
                sweetsOfChosenWeightRange.push(sweet);
            }
        });
        utilities.printSweetsOf(sweetsOfChosenWeightRange);
    }
}

module.exports = GiftBox;
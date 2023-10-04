"use strict";
exports.__esModule = true;
var Budget_1 = require("./Budget");
var DiscountsCalculator_1 = require("./DiscountsCalculator");
var budgetValue = 300;
var budgetQty = 4;
var calculatorClass = new DiscountsCalculator_1.DiscountsCalculator();
var budgetClass = new Budget_1.Budget(budgetValue, budgetQty);
console.log("Desconto de: ", calculatorClass.calculateDiscounts(budgetClass));

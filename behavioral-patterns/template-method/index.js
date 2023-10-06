"use strict";
exports.__esModule = true;
var CalculatorTaxes_1 = require("./CalculatorTaxes");
var pis_1 = require("./taxes/pis");
var cofins_1 = require("./taxes/cofins");
var Budget_1 = require("./Budget");
var budgetValue = 500;
var qtyItems = 5;
var calculatorClass = new CalculatorTaxes_1.CalculatorTaxes();
var budgetClass = new Budget_1.Budget(budgetValue, qtyItems);
console.log('PIS', calculatorClass.calculator(budgetClass, new pis_1.Pis()));
console.log("COFINS", calculatorClass.calculator(budgetClass, new cofins_1.Cofins()));
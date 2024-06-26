"use strict";
exports.__esModule = true;
var CalculatorTaxes_1 = require("./CalculatorTaxes");
var icms_1 = require("./taxes/icms");
var iss_1 = require("./taxes/iss");
var Budget_1 = require("./Budget");
var budgetValue = 150;
var calculatorClass = new CalculatorTaxes_1.CalculatorTaxes();
var budgetClass = new Budget_1.Budget(budgetValue);
console.log('ICMS', calculatorClass.calculator(budgetClass, new icms_1.Icms()));
console.log("ISS", calculatorClass.calculator(budgetClass, new iss_1.Iss()));

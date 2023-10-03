"use strict";
exports.__esModule = true;
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.calculator = function (budget, tax) {
        return tax.calculateTax(budget);
    };
    return Calculator;
}());
exports.Calculator = Calculator;

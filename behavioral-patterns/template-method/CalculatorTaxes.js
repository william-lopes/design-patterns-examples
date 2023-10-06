"use strict";
exports.__esModule = true;
exports.CalculatorTaxes = void 0;
var CalculatorTaxes = /** @class */ (function () {
    function CalculatorTaxes() {
    }
    CalculatorTaxes.prototype.calculator = function (budget, tax) {
        return tax.calculateTax(budget);
    };
    return CalculatorTaxes;
}());
exports.CalculatorTaxes = CalculatorTaxes;

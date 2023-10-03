"use strict";
exports.__esModule = true;
exports.Iss = void 0;
var Iss = /** @class */ (function () {
    function Iss() {
    }
    Iss.prototype.calculateTax = function (budget) {
        return budget.value * 0.06;
    };
    return Iss;
}());
exports.Iss = Iss;

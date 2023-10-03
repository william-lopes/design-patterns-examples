"use strict";
exports.__esModule = true;
exports.Icms = void 0;
var Icms = /** @class */ (function () {
    function Icms() {
    }
    Icms.prototype.calculateTax = function (budget) {
        return budget.value * 0.1;
    };
    return Icms;
}());
exports.Icms = Icms;

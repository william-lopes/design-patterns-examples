"use strict";
exports.__esModule = true;
exports.TaxWith2Rates = void 0;
var TaxWith2Rates = /** @class */ (function () {
    function TaxWith2Rates() {
    }
    TaxWith2Rates.prototype.calculateTax = function (budget) {
        if (this.maximumRateMustApply(budget)) {
            return this.calculateMaximumRate(budget);
        }
        return this.calculateMinimumRate(budget);
    };
    return TaxWith2Rates;
}());
exports.TaxWith2Rates = TaxWith2Rates;

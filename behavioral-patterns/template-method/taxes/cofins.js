"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Cofins = void 0;
var TaxWith2Rates_1 = require("./TaxWith2Rates");
var Cofins = /** @class */ (function (_super) {
    __extends(Cofins, _super);
    function Cofins() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cofins.prototype.maximumRateMustApply = function (budget) {
        return budget.value > 300 && budget.qtyItems > 3;
    };
    Cofins.prototype.calculateMaximumRate = function (budget) {
        return budget.value * 0.04;
    };
    Cofins.prototype.calculateMinimumRate = function (budget) {
        return budget.value * 0.025;
    };
    return Cofins;
}(TaxWith2Rates_1.TaxWith2Rates));
exports.Cofins = Cofins;

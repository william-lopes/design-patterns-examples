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
exports.Pis = void 0;
var TaxWith2Rates_1 = require("./TaxWith2Rates");
var Pis = /** @class */ (function (_super) {
    __extends(Pis, _super);
    function Pis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pis.prototype.maximumRateMustApply = function (budget) {
        return budget.value > 500;
    };
    Pis.prototype.calculateMaximumRate = function (budget) {
        return budget.value * 0.03;
    };
    Pis.prototype.calculateMinimumRate = function (budget) {
        return budget.value * 0.02;
    };
    return Pis;
}(TaxWith2Rates_1.TaxWith2Rates));
exports.Pis = Pis;

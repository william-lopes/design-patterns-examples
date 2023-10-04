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
exports.DiscountMore500Reais = void 0;
var Discount_1 = require("./Discount");
var DiscountMore500Reais = /** @class */ (function (_super) {
    __extends(DiscountMore500Reais, _super);
    function DiscountMore500Reais() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiscountMore500Reais.prototype.calculator = function (budget) {
        if (budget.value > 500) {
            return budget.value * 0.05;
        }
        return this.nextDiscount.calculator(budget);
    };
    return DiscountMore500Reais;
}(Discount_1.Discount));
exports.DiscountMore500Reais = DiscountMore500Reais;

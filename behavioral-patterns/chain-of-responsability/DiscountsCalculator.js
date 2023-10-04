"use strict";
exports.__esModule = true;
exports.DiscountsCalculator = void 0;
var DiscountMore5Items_1 = require("./discounts/DiscountMore5Items");
var DiscountMore500Reais_1 = require("./discounts/DiscountMore500Reais");
var WithoutDiscount_1 = require("./discounts/WithoutDiscount");
var DiscountsCalculator = /** @class */ (function () {
    function DiscountsCalculator() {
    }
    DiscountsCalculator.prototype.calculateDiscounts = function (budget) {
        var chainOfDiscounts = new DiscountMore5Items_1.DiscountMore5Items(new DiscountMore500Reais_1.DiscountMore500Reais(new WithoutDiscount_1.WithoutDiscount()));
        return chainOfDiscounts.calculator(budget);
    };
    return DiscountsCalculator;
}());
exports.DiscountsCalculator = DiscountsCalculator;

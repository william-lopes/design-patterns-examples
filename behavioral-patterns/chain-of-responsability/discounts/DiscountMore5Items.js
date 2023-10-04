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
exports.DiscountMore5Items = void 0;
var Discount_1 = require("./Discount");
var DiscountMore5Items = /** @class */ (function (_super) {
    __extends(DiscountMore5Items, _super);
    function DiscountMore5Items() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiscountMore5Items.prototype.calculator = function (budget) {
        if (budget.qtyItems > 5) {
            return budget.value * 0.1;
        }
        return this.nextDiscount.calculator(budget);
    };
    return DiscountMore5Items;
}(Discount_1.Discount));
exports.DiscountMore5Items = DiscountMore5Items;

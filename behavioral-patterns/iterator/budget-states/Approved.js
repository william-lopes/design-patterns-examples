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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Approved = void 0;
var BudgetState_1 = require("./BudgetState");
var Finished_1 = require("./Finished");
var Approved = /** @class */ (function (_super) {
    __extends(Approved, _super);
    function Approved() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Approved.prototype.applyExtraDiscount = function (budget) {
        return budget.value * 0.02;
    };
    Approved.prototype.ends = function (budget) {
        budget.currentState = new Finished_1.Finished();
    };
    return Approved;
}(BudgetState_1.BudgetState));
exports.Approved = Approved;

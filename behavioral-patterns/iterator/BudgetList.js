"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetList = void 0;
var BudgetList = /** @class */ (function () {
    function BudgetList() {
        this._budgets = [];
    }
    BudgetList.prototype.addBudget = function (budget) {
        this._budgets.push(budget);
    };
    Object.defineProperty(BudgetList.prototype, "budgets", {
        get: function () {
            return this._budgets;
        },
        enumerable: false,
        configurable: true
    });
    return BudgetList;
}());
exports.BudgetList = BudgetList;

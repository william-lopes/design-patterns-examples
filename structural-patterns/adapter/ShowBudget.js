"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowBudget = void 0;
var ShowBudget = /** @class */ (function () {
    function ShowBudget(consoleDisplay) {
        this.consoleDisplay = consoleDisplay;
    }
    ShowBudget.prototype.show = function (budgetList) {
        for (var _i = 0, _a = budgetList.budgets; _i < _a.length; _i++) {
            var budget = _a[_i];
            this.consoleDisplay.show(budget);
        }
    };
    return ShowBudget;
}());
exports.ShowBudget = ShowBudget;

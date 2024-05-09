"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Budget = void 0;
var OnApproval_1 = require("./budget-states/OnApproval");
var Budget = /** @class */ (function () {
    function Budget(value, qtyItems) {
        this.value = value;
        this.qtyItems = qtyItems;
        this.currentState = new OnApproval_1.OnApproval();
    }
    Budget.prototype.applyExtraDiscount = function () {
        this.value -= this.currentState.applyExtraDiscount(this);
    };
    Budget.prototype.approves = function () {
        this.currentState.approves(this);
    };
    Budget.prototype.disapprove = function () {
        this.currentState.disapprove(this);
    };
    Budget.prototype.ends = function () {
        this.currentState.ends(this);
    };
    return Budget;
}());
exports.Budget = Budget;

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
exports.OnApproval = void 0;
var Approved_1 = require("./Approved");
var BudgetState_1 = require("./BudgetState");
var Desapproved_1 = require("./Desapproved");
var OnApproval = /** @class */ (function (_super) {
    __extends(OnApproval, _super);
    function OnApproval() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnApproval.prototype.applyExtraDiscount = function (budget) {
        return budget.value * 0.05;
    };
    OnApproval.prototype.approves = function (budget) {
        budget.currentState = new Approved_1.Approved();
    };
    OnApproval.prototype.disapprove = function (budget) {
        budget.currentState = new Desapproved_1.Desapproved();
    };
    return OnApproval;
}(BudgetState_1.BudgetState));
exports.OnApproval = OnApproval;

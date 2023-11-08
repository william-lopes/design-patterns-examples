"use strict";
exports.__esModule = true;
exports.generateOrder = void 0;
var Budget_1 = require("../Budget");
var Order_1 = require("../Order");
var generateOrder = /** @class */ (function () {
    function generateOrder(budgetValue, budgetQty, clientName) {
        this.budgetValue = budgetValue;
        this.budgetQty = budgetQty;
        this.clientName = clientName;
        this.orderActions = [];
    }
    generateOrder.prototype.addOrderAction = function (action) {
        this.orderActions.push(action);
    };
    generateOrder.prototype.execute = function () {
        var budgetClass = new Budget_1.Budget(this.budgetValue, this.budgetQty);
        var orderClass = new Order_1.Order();
        orderClass.clientName = this.clientName;
        orderClass.budget = budgetClass;
        console.log("Budget and Order Created: ", budgetClass, orderClass);
        this.orderActions.forEach(function (action) { return action.execute(orderClass); });
    };
    return generateOrder;
}());
exports.generateOrder = generateOrder;

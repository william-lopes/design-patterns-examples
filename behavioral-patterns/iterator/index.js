"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Budget_1 = require("./Budget");
var BudgetList_1 = require("./BudgetList");
var budgetOne = new Budget_1.Budget(1500.75, 2);
budgetOne.approves();
var budgetTwo = new Budget_1.Budget(150, 3);
budgetTwo.disapprove();
var budgetThree = new Budget_1.Budget(1500, 5);
budgetThree.approves();
budgetThree.ends();
var budgetList = new BudgetList_1.BudgetList();
budgetList.addBudget(budgetOne);
budgetList.addBudget(budgetTwo);
budgetList.addBudget(budgetThree);
for (var _i = 0, _a = budgetList.budgets; _i < _a.length; _i++) {
    var budget = _a[_i];
    console.log("Value", budget.value);
    console.log("Qty Items", budget.qtyItems);
    console.log("State", budget.currentState);
}

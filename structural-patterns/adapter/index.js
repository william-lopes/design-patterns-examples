"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Budget_1 = require("./Budget");
var BudgetList_1 = require("./BudgetList");
var ShowBudget_1 = require("./ShowBudget");
var ConsoleDisplayLog_1 = require("./console-displays/ConsoleDisplayLog");
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
// implements adapter to show console
var showBudget = new ShowBudget_1.ShowBudget(new ConsoleDisplayLog_1.ConsoleDisplayLog());
//const showBudget = new ShowBudget(new ConsoleDisplayInfo())
showBudget.show(budgetList);

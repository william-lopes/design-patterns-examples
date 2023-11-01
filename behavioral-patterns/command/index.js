"use strict";
exports.__esModule = true;
var generateOrder_1 = require("./commands/generateOrder");
var budgetValue = 300;
var budgetQty = 2;
var clientName = "Wal";
new generateOrder_1.generateOrder(budgetValue, budgetQty, clientName).execute();

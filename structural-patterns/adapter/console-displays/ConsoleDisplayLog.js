"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleDisplayLog = void 0;
var ConsoleDisplayLog = /** @class */ (function () {
    function ConsoleDisplayLog() {
    }
    ConsoleDisplayLog.prototype.show = function (budget) {
        console.info("Display Log \n");
        console.log("Value", budget.value);
        console.log("Qty Items", budget.qtyItems);
        console.log("State", budget.currentState);
    };
    return ConsoleDisplayLog;
}());
exports.ConsoleDisplayLog = ConsoleDisplayLog;

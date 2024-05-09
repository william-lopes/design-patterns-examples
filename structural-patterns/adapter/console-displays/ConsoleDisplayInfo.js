"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleDisplayInfo = void 0;
var ConsoleDisplayInfo = /** @class */ (function () {
    function ConsoleDisplayInfo() {
    }
    ConsoleDisplayInfo.prototype.show = function (budget) {
        console.info("Display Info \n");
        console.info("Value", budget.value);
        console.info("Qty Items", budget.qtyItems);
        console.info("State", budget.currentState);
    };
    return ConsoleDisplayInfo;
}());
exports.ConsoleDisplayInfo = ConsoleDisplayInfo;

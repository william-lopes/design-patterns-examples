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
exports.Finished = void 0;
var BudgetState_1 = require("./BudgetState");
var Finished = /** @class */ (function (_super) {
    __extends(Finished, _super);
    function Finished() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Finished.prototype.applyExtraDiscount = function (budget) {
        throw new DOMException('Um orçamento Finalizado não pode receber descontos');
    };
    return Finished;
}(BudgetState_1.BudgetState));
exports.Finished = Finished;

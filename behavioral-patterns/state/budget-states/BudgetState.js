"use strict";
exports.__esModule = true;
exports.BudgetState = void 0;
var BudgetState = /** @class */ (function () {
    function BudgetState() {
    }
    BudgetState.prototype.applyExtraDiscount = function (budget) { };
    BudgetState.prototype.approves = function (budget) {
        throw new DOMException('Este orçamento não pode ser Aprovado');
    };
    BudgetState.prototype.disapprove = function (budget) {
        throw new DOMException('Este orçamento não pode ser Reprovado');
    };
    BudgetState.prototype.ends = function (budget) {
        throw new DOMException('Este orçamento não pode ser Finalizado');
    };
    return BudgetState;
}());
exports.BudgetState = BudgetState;

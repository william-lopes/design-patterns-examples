import {Budget} from "../Budget";

export abstract class BudgetState {
    public applyExtraDiscount (budget: Budget): any {}

    public approves(budget: Budget): void {
        throw new DOMException('Este orçamento não pode ser Aprovado');
    }

    public disapprove(budget: Budget): void {
        throw new DOMException('Este orçamento não pode ser Reprovado');
    }

    public ends(budget: Budget): void {
        throw new DOMException('Este orçamento não pode ser Finalizado');
    }
}

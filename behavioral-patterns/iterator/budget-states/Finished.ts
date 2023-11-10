import {BudgetState} from "./BudgetState";
import {Budget} from "../Budget";

export class Finished extends BudgetState {
    public applyExtraDiscount(budget: Budget): number {
        throw new DOMException('Um orçamento Finalizado não pode receber descontos')
    }
}

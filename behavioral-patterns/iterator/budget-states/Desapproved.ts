import {BudgetState} from "./BudgetState";
import {Budget} from "../Budget";
import {Finished} from "./Finished";

export class Desapproved extends BudgetState {

    public applyExtraDiscount(budget: Budget): number {
        throw new DOMException('Um orçamento Reprovado não pode receber descontos');
    }

    public ends(budget: Budget): void {
        budget.currentState = new Finished()
    }
}

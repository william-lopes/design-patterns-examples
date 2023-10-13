import {Budget} from "../Budget";
import {BudgetState} from "./BudgetState";
import {Finished} from "./Finished";

export class Approved extends BudgetState {
    public applyExtraDiscount(budget: Budget): number {
        return budget.value * 0.02
    }

    public ends(budget: Budget): void {
        budget.currentState = new Finished()
    }
}

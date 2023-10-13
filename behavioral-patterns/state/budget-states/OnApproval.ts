import {Budget} from "../Budget";
import {Approved} from "./Approved";
import {BudgetState} from "./BudgetState";
import {Desapproved} from "./Desapproved";

export class OnApproval extends BudgetState {
    public applyExtraDiscount(budget: Budget): number {
        return budget.value * 0.05
    }

    public approves(budget: Budget): void {
        budget.currentState = new Approved()
    }

    public disapprove(budget: Budget): void {
        budget.currentState = new Desapproved()
    }
}

import {BudgetState} from "./budget-states/BudgetState";
import {OnApproval} from "./budget-states/OnApproval";

export class Budget {
    public value: number
    public qtyItems: number
    public currentState: BudgetState
    constructor (value: number, qtyItems: number) {
        this.value = value
        this.qtyItems = qtyItems
        this.currentState = new OnApproval()
    }

    public applyExtraDiscount (): void {
        this.value -= this.currentState.applyExtraDiscount(this)
    }

    public approves(): void {
        this.currentState.approves(this)
    }

    public disapprove(): void {
        this.currentState.disapprove(this)
    }

    public ends(): void {
        this.currentState.ends(this)
    }
}

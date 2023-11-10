import {Budget} from "./Budget";

export class BudgetList {
    private _budgets: Array<Budget> = []

    public addBudget(budget: Budget): void {
        this._budgets.push(budget)
    }

    get budgets(): Array<Budget> {
        return this._budgets
    }
}

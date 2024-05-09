import { Budget } from "./Budget";
import { BudgetList } from "./BudgetList";
import { ConsoleDisplay } from "./console-displays/ConsoleDisplay";

export class ShowBudget {

    private consoleDisplay: ConsoleDisplay;

    constructor (consoleDisplay: ConsoleDisplay) {
        this.consoleDisplay = consoleDisplay;
    }

    public show(budgetList: BudgetList): void {
        for (let budget of budgetList.budgets) {
            this.consoleDisplay.show(budget);
        }        
    }
}
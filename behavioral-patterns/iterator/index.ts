import {Budget} from "./Budget";
import {BudgetList} from "./BudgetList";

const budgetOne: Budget = new Budget( 1500.75, 2)
budgetOne.approves()

const budgetTwo: Budget = new Budget(150, 3)
budgetTwo.disapprove()

const budgetThree: Budget = new Budget(1500, 5)
budgetThree.approves()
budgetThree.ends()

const budgetList = new BudgetList()
budgetList.addBudget(budgetOne)
budgetList.addBudget(budgetTwo)
budgetList.addBudget(budgetThree)

for (let budget of budgetList.budgets) {
    console.log("Value", budget.value)
    console.log("Qty Items", budget.qtyItems)
    console.log("State", budget.currentState)
}



import {Budget} from "./Budget";
import {BudgetList} from "./BudgetList";
import { ShowBudget } from "./ShowBudget";
import { ConsoleDisplayInfo } from "./console-displays/ConsoleDisplayInfo";
import { ConsoleDisplayLog } from "./console-displays/ConsoleDisplayLog";

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

// implements adapter to show console
const showBudget = new ShowBudget(new ConsoleDisplayLog())
//const showBudget = new ShowBudget(new ConsoleDisplayInfo())
showBudget.show(budgetList);


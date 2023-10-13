import {Budget} from "./Budget";

let budgetValue: number = 300
let budgetQty: number = 2

const budgetClass: Budget = new Budget(budgetValue, budgetQty)
//budgetClass.approves()
//budgetClass.ends()
budgetClass.applyExtraDiscount()

console.log("Desconto extra de: ", budgetClass.value)

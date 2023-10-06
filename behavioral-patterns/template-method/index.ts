import {CalculatorTaxes} from "./CalculatorTaxes";
import {Pis} from "./taxes/pis";
import {Cofins} from "./taxes/cofins";
import {Budget} from "./Budget";

let budgetValue: number = 500
let qtyItems: number = 5

const calculatorClass: CalculatorTaxes = new CalculatorTaxes()
const budgetClass: Budget = new Budget(budgetValue, qtyItems)

console.log('PIS', calculatorClass.calculator(budgetClass, new Pis()))
console.log("COFINS", calculatorClass.calculator(budgetClass, new Cofins()))

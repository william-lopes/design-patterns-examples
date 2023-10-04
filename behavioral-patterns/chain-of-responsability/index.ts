import {Budget} from "./Budget";
import {DiscountsCalculator} from "./DiscountsCalculator";

let budgetValue: number = 300;
let budgetQty: number = 4;

const calculatorClass: DiscountsCalculator = new DiscountsCalculator();
const budgetClass: Budget = new Budget(budgetValue, budgetQty);

console.log("Desconto de: ", calculatorClass.calculateDiscounts(budgetClass));

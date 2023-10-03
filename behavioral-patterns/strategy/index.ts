import {Calculator} from "./Calculator";
import {Icms} from "./taxes/icms";
import {Iss} from "./taxes/iss";
import {Budget} from "./Budget";

let budgetValue: number = 150;

const calculatorClass: Calculator = new Calculator();
const budgetClass: Budget = new Budget(budgetValue);

console.log('ICMS', calculatorClass.calculator(budgetClass, new Icms()));
console.log("ISS", calculatorClass.calculator(budgetClass, new Iss()));

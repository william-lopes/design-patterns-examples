import {Budget} from './Budget';
import {Tax} from "./taxes/Tax";
export class Calculator {
    public calculator(budget: Budget, tax: Tax): number {
        return tax.calculateTax(budget)
    }
}

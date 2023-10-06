import {Budget} from './Budget';
import {Tax} from "./taxes/Tax";
export class CalculatorTaxes {
    public calculator(budget: Budget, tax: Tax): number {
        return tax.calculateTax(budget)
    }
}

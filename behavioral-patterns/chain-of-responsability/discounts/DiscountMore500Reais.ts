import {Budget} from "../Budget";
import {Discount} from "./Discount";

export class DiscountMore500Reais extends Discount{
    public calculator(budget: Budget): number {
        if (budget.value > 500) {
            return budget.value * 0.05;
        }

        return this.nextDiscount.calculator(budget);
    }
}

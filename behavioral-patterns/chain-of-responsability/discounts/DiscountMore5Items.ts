import {Budget} from "../Budget";
import {Discount} from "./Discount";

export class DiscountMore5Items extends Discount{
    public calculator(budget: Budget): number {
        if (budget.qtyItems > 5) {
            return budget.value * 0.1;
        }

        return this.nextDiscount.calculator(budget);
    }
}

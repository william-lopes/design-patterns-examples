import {Budget} from "./Budget";
import {DiscountMore5Items} from "./discounts/DiscountMore5Items";
import {DiscountMore500Reais} from "./discounts/DiscountMore500Reais";
import {Discount} from "./discounts/Discount";
import {WithoutDiscount} from "./discounts/WithoutDiscount";

export class DiscountsCalculator {
    public calculateDiscounts(budget: Budget): number {

        let chainOfDiscounts: Discount = new DiscountMore5Items(new DiscountMore500Reais(new WithoutDiscount()))

        return chainOfDiscounts.calculator(budget);
    }
}

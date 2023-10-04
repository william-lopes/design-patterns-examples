import {Discount} from "./Discount";
import {Budget} from "../Budget";

export class WithoutDiscount extends Discount {

    public constructor() {
        super(null);
    }
    public calculator(budget: Budget): number {
        return 0;
    }
}

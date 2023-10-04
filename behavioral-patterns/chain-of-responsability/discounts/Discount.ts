import {Budget} from "../Budget";

export abstract class Discount{
    protected nextDiscount?: Discount

    public constructor (nextDiscount?: Discount) {
        this.nextDiscount = nextDiscount
    }

    public calculator (budget: Budget) :any  {}
}

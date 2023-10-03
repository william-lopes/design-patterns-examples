import {Budget} from "../Budget";
import {Tax} from "./Tax";

export class Icms implements Tax{

    public calculateTax(budget: Budget): number {
        return budget.value * 0.1
    }
}

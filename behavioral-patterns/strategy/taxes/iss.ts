import {Budget} from "../Budget";
import {Tax} from "./Tax";

export class Iss implements Tax{

    public calculateTax(budget: Budget): number {
        return budget.value * 0.06
    }
}

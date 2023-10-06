import {Budget} from "../Budget";

export interface Tax {
    calculateTax(budget: Budget): number
}

import {Tax} from "./Tax";
import {Budget} from "../Budget";

export abstract class TaxWith2Rates implements Tax {
    calculateTax(budget: Budget): number {
        if (this.maximumRateMustApply(budget)) {
            return this.calculateMaximumRate(budget)
        }
        return this.calculateMinimumRate(budget)
    }

    protected abstract maximumRateMustApply(budget: Budget): boolean
    protected abstract calculateMaximumRate(budget: Budget): number
    protected abstract calculateMinimumRate(budget: Budget): number
}

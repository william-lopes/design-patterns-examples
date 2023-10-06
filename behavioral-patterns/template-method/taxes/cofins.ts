import {Budget} from "../Budget";
import {TaxWith2Rates} from "./TaxWith2Rates";

export class Cofins extends TaxWith2Rates{

    protected maximumRateMustApply(budget: Budget): boolean {
        return budget.value > 300 && budget.qtyItems > 3
    }

    protected calculateMaximumRate(budget: Budget): number {
        return budget.value * 0.04
    }

    protected calculateMinimumRate(budget: Budget): number {
        return budget.value * 0.025
    }
}

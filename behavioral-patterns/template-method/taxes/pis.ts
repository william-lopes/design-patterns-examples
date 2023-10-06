import {Budget} from "../Budget";
import {TaxWith2Rates} from "./TaxWith2Rates";

export class Pis extends TaxWith2Rates{

    protected maximumRateMustApply(budget: Budget): boolean {
        return budget.value > 500
    }

    protected calculateMaximumRate(budget: Budget): number {
        return budget.value * 0.03
    }

    protected calculateMinimumRate(budget: Budget): number {
        return budget.value * 0.02
    }
}

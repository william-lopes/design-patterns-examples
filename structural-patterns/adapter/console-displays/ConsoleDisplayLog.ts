import { Budget } from "../Budget";
import { ConsoleDisplay } from "./ConsoleDisplay";

export class ConsoleDisplayLog implements ConsoleDisplay{
    public show(budget: Budget): any {
        console.info("Display Log \n");
        console.log("Value", budget.value)
        console.log("Qty Items", budget.qtyItems)
        console.log("State", budget.currentState)
    }
}
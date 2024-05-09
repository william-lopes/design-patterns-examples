import { Budget } from "../Budget";
import { ConsoleDisplay } from "./ConsoleDisplay";

export class ConsoleDisplayInfo implements ConsoleDisplay{
    public show(budget: Budget): any {
        console.info("Display Info \n");
        console.info("Value", budget.value)
        console.info("Qty Items", budget.qtyItems)
        console.info("State", budget.currentState)
    }
}
import {Budget} from "../Budget";
import {Order} from "../Order";
import {Command} from "./Command";

export class generateOrder implements Command {
    private readonly budgetValue: number;
    private readonly budgetQty: number;
    private readonly clientName: string;
    constructor(budgetValue, budgetQty, clientName) {
        this.budgetValue = budgetValue
        this.budgetQty = budgetQty
        this.clientName = clientName
    }

    execute(): void {
        const budgetClass: Budget = new Budget(this.budgetValue, this.budgetQty)
        const orderClass: Order = new Order()
        orderClass.clientName = this.clientName
        orderClass.budget = budgetClass

        console.log("Budget Created: ", budgetClass)
        console.log("Order Created: ", orderClass)
    }
}

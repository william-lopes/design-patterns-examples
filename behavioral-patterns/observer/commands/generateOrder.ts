import {Budget} from "../Budget";
import {Order} from "../Order";
import {Command} from "./Command";
import {OrderAction} from "../OrderActions/OrderAction";

export class generateOrder implements Command {
    private readonly budgetValue: number
    private readonly budgetQty: number
    private readonly clientName: string
    public orderActions :Array<OrderAction>
    constructor(budgetValue, budgetQty, clientName) {
        this.budgetValue = budgetValue
        this.budgetQty = budgetQty
        this.clientName = clientName

        this.orderActions = []
    }

    public addOrderAction(action: OrderAction)  {
        this.orderActions.push(action)
    }

    public execute(): void {
        const budgetClass: Budget = new Budget(this.budgetValue, this.budgetQty)
        const orderClass: Order = new Order()
        orderClass.clientName = this.clientName
        orderClass.budget = budgetClass

        console.log("Budget and Order Created: ", budgetClass, orderClass)

        this.orderActions.forEach((action: OrderAction) => action.execute(orderClass))
    }
}

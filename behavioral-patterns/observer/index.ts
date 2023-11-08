import {generateOrder} from "./commands/generateOrder";
import {SaveOrderDB} from "./OrderActions/saveOrderDB";
import {SendEmailOrder} from "./OrderActions/sendEmailOrder";

let budgetValue: number = 300
let budgetQty: number = 2
let clientName: string = "Wal"

const order = new generateOrder(budgetValue, budgetQty, clientName)
order.addOrderAction(new SaveOrderDB())
order.addOrderAction(new SendEmailOrder())
order.execute()



import {generateOrder} from "./commands/generateOrder";

let budgetValue: number = 300
let budgetQty: number = 2
let clientName: string = "Wal"

new generateOrder(budgetValue, budgetQty, clientName).execute()

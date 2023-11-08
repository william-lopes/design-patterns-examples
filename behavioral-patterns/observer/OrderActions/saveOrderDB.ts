import {Order} from "../Order";
import {OrderAction} from "./OrderAction";

export class SaveOrderDB implements OrderAction{
    execute(order: Order): void {
        console.log("Save order in DB");
    }
}

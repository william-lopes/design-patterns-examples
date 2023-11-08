import {Order} from "../Order";
import {OrderAction} from "./OrderAction";

export class SendEmailOrder implements OrderAction{
    execute(order: Order): void {
        console.log("Send order to email");
    }
}

import {Order} from "../Order";

export interface OrderAction {
    execute(order: Order): void
}

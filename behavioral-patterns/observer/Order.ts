import {Budget} from "./Budget";

export class Order {
    public clientName: string
    public endDate: Date
    public budget: Budget

    constructor() {
        this.endDate = new Date()
    }
}

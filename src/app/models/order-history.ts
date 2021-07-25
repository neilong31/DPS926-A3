import { Order } from "./order";
import { Pizza } from "./pizza";

export class OrderHistory extends Order{

    timestamp: Date;

    constructor() {
        super([], 0.0, 0)
        this.timestamp = null;
    }

    setTimestamp() {
        this.timestamp = new Date();
    }

}

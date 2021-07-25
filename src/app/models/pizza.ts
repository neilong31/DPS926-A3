import { Size } from "./size";
import { Topping } from "./topping";

export class Pizza {

    topping: Topping;
    size: Size;
    price: number;
    quantity: number;

    constructor(topping: Topping, size: Size, quantity: number) {
        this.topping = topping;
        this.size = size;
        this.price = (topping.price + size.price) * quantity;
        this.price.toFixed(2);
        this.quantity = quantity;
    }


}

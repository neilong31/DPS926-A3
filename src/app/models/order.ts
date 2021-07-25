import { Pizza } from "./pizza";

export class Order {
    pizzas: Pizza[];
    price: number;
    totalNumPizzas: number;


    constructor(pizzas: Pizza[], price: number, totalNumPizzas: number) {
        this.pizzas = pizzas;
        this.price = price;
        this.totalNumPizzas = totalNumPizzas;
    }

    addPizza(pizza: Pizza) {
        this.pizzas.push(pizza);
        this.price += pizza.price;
        this.price.toFixed(2);
        this.totalNumPizzas += pizza.quantity;
    }

    removePizza(index: number){
        console.log(this.price);
        console.log(this.pizzas[index].price);

        this.price -= this.pizzas[index].price;
        this.totalNumPizzas -= this.pizzas[index].quantity;
        this.pizzas.splice(index,1);
    }



}

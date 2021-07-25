import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Order } from '../models/order';
import { OrderHistory } from '../models/order-history';
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  private arrOfOrders: OrderHistory[];
  private currentOrder: OrderHistory;
  observableOrder: Subject<OrderHistory>;

  constructor() {
    this.arrOfOrders = [];
    this.currentOrder = new OrderHistory();
    this.observableOrder = new Subject<OrderHistory>();
  }

  getOrders() {
    return [...this.arrOfOrders];
  }

  getCurrentOrder() {
    return this.currentOrder;
  }

  placeOrder() {
    this.currentOrder.setTimestamp();
    this.arrOfOrders.push(this.currentOrder);
    this.currentOrder = new OrderHistory();
    console.log(this.currentOrder)
  }

  deletePizzaFromCurrentOrder(index:number){
    this.currentOrder.removePizza(index);
  }

  startNewOrder() {
    this.currentOrder = new OrderHistory();
  }

  addToOrder(pizza: Pizza) {
    this.currentOrder.addPizza(pizza);
    this.observableOrder.next(this.currentOrder);
  }
}

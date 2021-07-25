import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { OrderServiceService } from '../services/order-service.service';

@Component({
  selector: 'app-previous-orders',
  templateUrl: './previous-orders.page.html',
  styleUrls: ['./previous-orders.page.scss'],
})
export class PreviousOrdersPage implements OnInit {

  orders: Order[];
  constructor(private orderService: OrderServiceService) { }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
    console.log(this.orders)
    console.log(this.orderService.getOrders());
  }

}

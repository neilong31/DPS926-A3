import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../services/order-service.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.page.html',
  styleUrls: ['./manager.page.scss'],
})
export class ManagerPage implements OnInit {

  constructor(private orderService: OrderServiceService) { }

  ngOnInit() {
  }

  startNewOrder() {
    console.log("starting new order");
    this.orderService.startNewOrder();
  }

}

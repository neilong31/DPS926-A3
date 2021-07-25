import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Order } from '../models/order';
import { OrderHistory } from '../models/order-history';
import { OrderServiceService } from '../services/order-service.service';

@Component({
  selector: 'app-current-order',
  templateUrl: './current-order.page.html',
  styleUrls: ['./current-order.page.scss'],
})
export class CurrentOrderPage implements OnInit {

  order: OrderHistory;
  showDelete: 
  
  boolean;
  constructor(public alertController: AlertController, private orderService: OrderServiceService) { }

  ngOnInit() {
    this.order = this.orderService.getCurrentOrder();
  }

  placeOrder() {
    if(this.order.pizzas.length > 0){
      this.showAlert();
      this.orderService.placeOrder();
    }
    else{
      this.showError();
    }
    
  }

  deletePizza(index: number){
    console.log(index);
    this.orderService.deletePizzaFromCurrentOrder(index);
    this.order = this.orderService.getCurrentOrder();
    console.log(this.order);
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Order Placed!',
      subHeader: '',
      message: 'Your order has been placed!',
      buttons: ['OK']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
  }

  async showError() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Order was no placed.',
      message: 'There must be pizzas in current order',
      buttons: ['OK']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
  }

}

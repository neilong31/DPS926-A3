import { Component } from '@angular/core';
import { Pizza } from '../models/pizza';
import { Size } from '../models/size';
import { Topping } from '../models/topping';
import { AlertController } from '@ionic/angular';
import { OrderServiceService } from '../services/order-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  toppings: Topping[];
  sizes: Size[];
  selectedTopping: Topping;
  selectedSize: Size;
  selectedQuantity: number;


  constructor(public alertController: AlertController, private orderService: OrderServiceService) {
    this.toppings = [
      new Topping("Meatballs", 3.0),
      new Topping("Mushroom", 1.0),
      new Topping("Pepperoni", 2.0),
      new Topping("Vegetable", 1.5)
    ];

    this.sizes = [
      new Size("Small", 10.99),
      new Size("Medium", 12.99),
      new Size("Large", 14.99),
      new Size("Party", 16.99),
    ]

    this.selectedQuantity = 0;
    this.selectedTopping = new Topping("", 0);
    this.selectedSize = new Size("", 0);
  }

  selectTopping(topping: Topping) {
    this.selectedTopping = topping;
  }

  selectSize(size: Topping) {
    this.selectedSize = size;
  }

  updateQuantity(num: number) {
    let tempString = "" + this.selectedQuantity;
    if (this.selectedQuantity != 0) {
      tempString = tempString + num;
    }
    else {
      tempString = "" + num;
    }

    this.selectedQuantity = parseInt(tempString);
  }

  resetQuantity() {
    this.selectedQuantity = 0;
  }

  addPizzaToOrder() {
    let tempPizza = new Pizza(this.selectedTopping, this.selectedSize, this.selectedQuantity);
    if (this.selectedTopping.name != "" && this.selectedSize.name != "" && this.selectedQuantity > 0) {
      this.orderService.addToOrder(tempPizza);
      this.showAlert(tempPizza);
      this.resetQuantity();
      this.selectedTopping = new Topping("", 0);
      this.selectedSize = new Size("", 0);
    }
    else {
      this.showError();
    }
  }

  async showAlert(pizza: Pizza) {
    const alert = await this.alertController.create({
      header: 'Pizza Added!',
      subHeader: 'Price: ' + pizza.price,
      message: 'Topping: ' + pizza.topping.name + " Size: " + pizza.size.name,
      buttons: ['OK']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
  }

  async showError() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Pizza Not Added!',
      message: 'Please make sure to select a topping, size, and quantity',
      buttons: ['OK']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
  }

}

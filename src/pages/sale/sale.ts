import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page14Page } from '../page14/page14';
import { Page26Page } from '../page26/page26';

@Component({
  selector: 'page-sale',
  templateUrl: 'sale.html'
})
export class SalePage {

  constructor(public navCtrl: NavController) {
  }
  goToPage14(params){
    if (!params) params = {};
    this.navCtrl.push(Page14Page);
  }goToPage26(params){
    if (!params) params = {};
    this.navCtrl.push(Page26Page);
  }
}

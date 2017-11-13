import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page26Page } from '../page26/page26';

@Component({
  selector: 'page-sell',
  templateUrl: 'sell.html'
})
export class SellPage {

  constructor(public navCtrl: NavController) {
  }
  goToPage26(params){
    if (!params) params = {};
    this.navCtrl.push(Page26Page);
  }
}

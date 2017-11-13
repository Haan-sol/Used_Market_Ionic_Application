import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Blacklist_reportPage } from '../blacklist_report/blacklist_report';

@Component({
  selector: 'page-page23',
  templateUrl: 'page23.html'
})
export class Page23Page {

  constructor(public navCtrl: NavController) {
  }
  goToBlacklist_report(params){
    if (!params) params = {};
    this.navCtrl.push(Blacklist_reportPage);
  }
}

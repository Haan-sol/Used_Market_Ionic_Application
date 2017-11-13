import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Blacklist_reportPage } from '../blacklist_report/blacklist_report';

@Component({
  selector: 'page-page25',
  templateUrl: 'page25.html'
})
export class Page25Page {

  constructor(public navCtrl: NavController) {
  }
  goToBlacklist_report(params){
    if (!params) params = {};
    this.navCtrl.push(Blacklist_reportPage);
  }
}

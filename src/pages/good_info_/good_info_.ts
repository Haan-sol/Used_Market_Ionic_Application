import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Blacklist_reportPage } from '../blacklist_report/blacklist_report';

@Component({
  selector: 'page-good_info_',
  templateUrl: 'good_info_.html'
})
export class Good_info_Page {

  constructor(public navCtrl: NavController) {
  }
  goToBlacklist_report(params){
    if (!params) params = {};
    this.navCtrl.push(Blacklist_reportPage);
  }
}

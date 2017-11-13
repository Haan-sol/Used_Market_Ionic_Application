import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LikePage } from '../like/like';
import { Good_info_Page } from '../good_info_/good_info_';
import { Blacklist_reportPage } from '../blacklist_report/blacklist_report';
import { Page23Page } from '../page23/page23';

@Component({
  selector: 'page-page24',
  templateUrl: 'page24.html'
})
export class Page24Page {

  constructor(public navCtrl: NavController) {
  }
  goToLike(params){
    if (!params) params = {};
    this.navCtrl.push(LikePage);
  }goToGood_info_(params){
    if (!params) params = {};
    this.navCtrl.push(Good_info_Page);
  }goToBlacklist_report(params){
    if (!params) params = {};
    this.navCtrl.push(Blacklist_reportPage);
  }goToPage24(params){
    if (!params) params = {};
    this.navCtrl.push(Page24Page);
  }goToPage23(params){
    if (!params) params = {};
    this.navCtrl.push(Page23Page);
  }
}

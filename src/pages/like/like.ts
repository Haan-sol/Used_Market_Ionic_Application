import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Good_info_Page } from '../good_info_/good_info_';
import { Blacklist_reportPage } from '../blacklist_report/blacklist_report';
import { Page24Page } from '../page24/page24';
import { Page23Page } from '../page23/page23';

@Component({
  selector: 'page-like',
  templateUrl: 'like.html'
})
export class LikePage {

  constructor(public navCtrl: NavController) {
  }
  goToGood_info_(params){
    if (!params) params = {};
    this.navCtrl.push(Good_info_Page);
  }goToBlacklist_report(params){
    if (!params) params = {};
    this.navCtrl.push(Blacklist_reportPage);
  }goToPage24(params){
    if (!params) params = {};
    this.navCtrl.push(Page24Page);
  }goToLike(params){
    if (!params) params = {};
    this.navCtrl.push(LikePage);
  }goToPage23(params){
    if (!params) params = {};
    this.navCtrl.push(Page23Page);
  }
}

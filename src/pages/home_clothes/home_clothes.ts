import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page24Page } from '../page24/page24';
import { LikePage } from '../like/like';
import { Good_info_Page } from '../good_info_/good_info_';
import { Blacklist_reportPage } from '../blacklist_report/blacklist_report';
import { Page23Page } from '../page23/page23';

@Component({
  selector: 'page-home_clothes',
  templateUrl: 'home_clothes.html'
})
export class Home_clothesPage {

  constructor(public navCtrl: NavController) {
  }
  goToPage24(params){
    if (!params) params = {};
    this.navCtrl.push(Page24Page);
  }goToLike(params){
    if (!params) params = {};
    this.navCtrl.push(LikePage);
  }goToGood_info_(params){
    if (!params) params = {};
    this.navCtrl.push(Good_info_Page);
  }goToBlacklist_report(params){
    if (!params) params = {};
    this.navCtrl.push(Blacklist_reportPage);
  }goToPage23(params){
    if (!params) params = {};
    this.navCtrl.push(Page23Page);
  }
}

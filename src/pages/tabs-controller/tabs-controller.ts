import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Home_clothesPage } from '../home_clothes/home_clothes';
import { Page24Page } from '../page24/page24';
import { LikePage } from '../like/like';
import { Good_info_Page } from '../good_info_/good_info_';
import { Blacklist_reportPage } from '../blacklist_report/blacklist_report';
import { Page23Page } from '../page23/page23';
import { Page14Page } from '../page14/page14';
import { Page26Page } from '../page26/page26';
import { SellPage } from '../sell/sell';
import { HomePage } from '../home/home';
import { MypagePage } from '../mypage/mypage';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = SellPage;
  tab2Root: any = HomePage;
  tab3Root: any = MypagePage;
  constructor(public navCtrl: NavController) {
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToHome_clothes(params){
    if (!params) params = {};
    this.navCtrl.push(Home_clothesPage);
  }goToPage24(params){
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
  }goToPage14(params){
    if (!params) params = {};
    this.navCtrl.push(Page14Page);
  }goToSell(params){
    if (!params) params = {};
    this.navCtrl.push(SellPage);
  }goToPage26(params){
    if (!params) params = {};
    this.navCtrl.push(Page26Page);
  }
}

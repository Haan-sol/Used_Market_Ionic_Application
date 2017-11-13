import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { Home_clothesPage } from '../home_clothes/home_clothes';
import { Page24Page } from '../page24/page24';
import { LikePage } from '../like/like';
import { Good_info_Page } from '../good_info_/good_info_';
import { Blacklist_reportPage } from '../blacklist_report/blacklist_report';
import { Page23Page } from '../page23/page23';
import { Page14Page } from '../page14/page14';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToHome(params){
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
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
}

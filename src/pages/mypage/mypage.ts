import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Account_managePage } from '../account_manage/account_manage';
import { Account_modifyPage } from '../account_modify/account_modify';
import { Password_modifyPage } from '../password_modify/password_modify';
import { Bug_requestPage } from '../bug_request/bug_request';
import { Blacklist_reportPage } from '../blacklist_report/blacklist_report';
import { SalePage } from '../sale/sale';
import { Page14Page } from '../page14/page14';
import { Page26Page } from '../page26/page26';
import { LikePage } from '../like/like';
import { Good_info_Page } from '../good_info_/good_info_';
import { Page24Page } from '../page24/page24';
import { Page23Page } from '../page23/page23';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { Home_clothesPage } from '../home_clothes/home_clothes';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-mypage',
  templateUrl: 'mypage.html'
})
export class MypagePage {

  constructor(public navCtrl: NavController) {
  }
  goToAccount_manage(params){
    if (!params) params = {};
    this.navCtrl.push(Account_managePage);
  }goToAccount_modify(params){
    if (!params) params = {};
    this.navCtrl.push(Account_modifyPage);
  }goToPassword_modify(params){
    if (!params) params = {};
    this.navCtrl.push(Password_modifyPage);
  }goToBug_request(params){
    if (!params) params = {};
    this.navCtrl.push(Bug_requestPage);
  }goToBlacklist_report(params){
    if (!params) params = {};
    this.navCtrl.push(Blacklist_reportPage);
  }goToSale(params){
    if (!params) params = {};
    this.navCtrl.push(SalePage);
  }goToPage14(params){
    if (!params) params = {};
    this.navCtrl.push(Page14Page);
  }goToPage26(params){
    if (!params) params = {};
    this.navCtrl.push(Page26Page);
  }goToLike(params){
    if (!params) params = {};
    this.navCtrl.push(LikePage);
  }goToGood_info_(params){
    if (!params) params = {};
    this.navCtrl.push(Good_info_Page);
  }goToPage24(params){
    if (!params) params = {};
    this.navCtrl.push(Page24Page);
  }goToPage23(params){
    if (!params) params = {};
    this.navCtrl.push(Page23Page);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToHome_clothes(params){
    if (!params) params = {};
    this.navCtrl.push(Home_clothesPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
}

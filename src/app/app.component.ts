import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { HomePage } from '../pages/home/home';
import { Home_clothesPage } from '../pages/home_clothes/home_clothes';
import { Page24Page } from '../pages/page24/page24';
import { LikePage } from '../pages/like/like';
import { Good_info_Page } from '../pages/good_info_/good_info_';
import { Blacklist_reportPage } from '../pages/blacklist_report/blacklist_report';
import { Page23Page } from '../pages/page23/page23';
import { Page14Page } from '../pages/page14/page14';
import { SellPage } from '../pages/sell/sell';
import { Page26Page } from '../pages/page26/page26';
import { SalePage } from '../pages/sale/sale';
import { Account_managePage } from '../pages/account_manage/account_manage';
import { Account_modifyPage } from '../pages/account_modify/account_modify';
import { Password_modifyPage } from '../pages/password_modify/password_modify';
import { Bug_requestPage } from '../pages/bug_request/bug_request';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToHome_clothes(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Home_clothesPage);
  }goToPage24(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Page24Page);
  }goToLike(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LikePage);
  }goToGood_info_(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Good_info_Page);
  }goToBlacklist_report(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Blacklist_reportPage);
  }goToPage23(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Page23Page);
  }goToPage14(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Page14Page);
  }goToSell(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SellPage);
  }goToPage26(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Page26Page);
  }goToSale(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SalePage);
  }goToAccount_manage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Account_managePage);
  }goToAccount_modify(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Account_modifyPage);
  }goToPassword_modify(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Password_modifyPage);
  }goToBug_request(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Bug_requestPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SignupPage);
  }
}

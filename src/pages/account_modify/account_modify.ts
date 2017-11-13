import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Account_managePage } from '../account_manage/account_manage';
import { Password_modifyPage } from '../password_modify/password_modify';

@Component({
  selector: 'page-account_modify',
  templateUrl: 'account_modify.html'
})
export class Account_modifyPage {

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
  }
}

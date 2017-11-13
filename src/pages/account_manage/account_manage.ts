import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Account_modifyPage } from '../account_modify/account_modify';
import { Password_modifyPage } from '../password_modify/password_modify';

@Component({
  selector: 'page-account_manage',
  templateUrl: 'account_manage.html'
})
export class Account_managePage {

  constructor(public navCtrl: NavController) {
  }
  goToAccount_modify(params){
    if (!params) params = {};
    this.navCtrl.push(Account_modifyPage);
  }goToAccount_manage(params){
    if (!params) params = {};
    this.navCtrl.push(Account_managePage);
  }goToPassword_modify(params){
    if (!params) params = {};
    this.navCtrl.push(Password_modifyPage);
  }
}

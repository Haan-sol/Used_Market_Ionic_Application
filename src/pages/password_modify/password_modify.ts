import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Account_managePage } from '../account_manage/account_manage';
import { Account_modifyPage } from '../account_modify/account_modify';

@Component({
  selector: 'page-password_modify',
  templateUrl: 'password_modify.html'
})
export class Password_modifyPage {

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

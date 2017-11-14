import { Component } from '@angular/core';
import { Home_clothesPage } from '../home_clothes/home_clothes';
import { Page24Page } from '../page24/page24';
import { LikePage } from '../like/like';
import { Good_info_Page } from '../good_info_/good_info_';
import { Blacklist_reportPage } from '../blacklist_report/blacklist_report';
import { Page23Page } from '../page23/page23';
import { Page14Page } from '../page14/page14';
import { SignupPage } from '../signup/signup';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { IonicPage, NavController, NavParams,
  Loading, LoadingController, Alert, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public loginForm:FormGroup;
  public loading:Loading;
  constructor(public navCtrl: NavController,
    public loadingCtrl:LoadingController, public alertCtrl:AlertController,
    public authProvider:AuthProvider, formBuilder:FormBuilder) {

      this.loginForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
      });
  }

  loginUser():void{
    if(!this.loginForm.valid){
      console.log('Form isn\'t valid pageYOffset, value: ${this.loginForm.value}');
    } else {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.authProvider.loginUser(email, password).then( authData => {
        this.loading.dismiss().then( () => {
          this.navCtrl.setRoot(HomePage);
        });
      }, error => {
        this.loading.dismiss().then( () => {
          const alert:Alert = this.alertCtrl.create({
            message: error.message,
            buttons: [{ text: "Ok", role: 'cancel'}]
          });
          alert.present()
        });
      });
      this.loading = this.loadingCtrl.create();
      this.loading.present()
    }
  }

  goToSignup():void {
    this.navCtrl.push('SignupPage');
  }

  goToPassword_modify():void {
    this.navCtrl.push('Password_modifyPage');
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
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
  goToTabsController(params){
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage);
  }
}

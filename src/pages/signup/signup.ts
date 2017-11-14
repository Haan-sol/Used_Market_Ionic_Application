import { Component } from '@angular/core';
import { LoginPage } from '../login/login';
import { Home_clothesPage } from '../home_clothes/home_clothes';
import { Page24Page } from '../page24/page24';
import { LikePage } from '../like/like';
import { Good_info_Page } from '../good_info_/good_info_';
import { Blacklist_reportPage } from '../blacklist_report/blacklist_report';
import { Page23Page } from '../page23/page23';
import { Page14Page } from '../page14/page14';
import { IonicPage, NavController, NavParams,
  Loading, LoadingController, Alert, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  public signupForm: FormGroup;
  public loading:Loading;

  constructor(public navCtrl:NavController,
    public loadingCtrl:LoadingController, public alertCtrl:AlertController,
    public authProvider:AuthProvider, formBuilder:FormBuilder) {
      this.signupForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
      });
  }

  signupUser():void{
    if(!this.signupForm.valid){
      console.log('Need to complete the form: ${this.signupForm.value}');
    } else {
      const email:string = this.signupForm.value.email;
      const password:string = this.signupForm.value.password;

      this.authProvider.signupUser(email, password).then( user => {
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

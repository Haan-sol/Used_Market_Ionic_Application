import { Component } from '@angular/core';
import { IonicPage, NavController,
  Alert, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-password_modify',
  templateUrl: 'password_modify.html'
})
export class Password_modifyPage {
  public password_modifyForm:FormGroup;

  constructor(public navCtrl: NavController, public authProvider:AuthProvider,
    public alertCtrl:AlertController, formBuilder:FormBuilder) {

      this.password_modifyForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])]
      });

  }


  password_modify():void {
    if(!this.password_modifyForm.valid){
      console.log('Form isn\'t valid pageYOffset, value: ${this.password_modifyForm.value}');
    } else {
      const email:string = this.password_modifyForm.value.email;
      
      this.authProvider.resetPassword(email).then( user => {
        const alert:Alert = this.alertCtrl.create({
          message: "Check your email for a password reset link",
          buttons: [{
            text: "Ok",
            role: 'cancel',
            handler: () => { this.navCtrl.pop() }
          }]
        });
        alert.present()
      }, error => {
        const errorAlert = this.alertCtrl.create({
          message: error.message,
          buttons: [{ text: "Ok", role: "cancel" }]
        });
        errorAlert.present();
      });
    }
  }

}

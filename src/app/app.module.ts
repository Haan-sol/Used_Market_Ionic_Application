import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MypagePage } from '../pages/mypage/mypage';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { HomePage } from '../pages/home/home';
import { Home_clothesPage } from '../pages/home_clothes/home_clothes';
import { Account_managePage } from '../pages/account_manage/account_manage';
import { Account_modifyPage } from '../pages/account_modify/account_modify';
import { Password_modifyPage } from '../pages/password_modify/password_modify';
import { Bug_requestPage } from '../pages/bug_request/bug_request';
import { Blacklist_reportPage } from '../pages/blacklist_report/blacklist_report';
import { LikePage } from '../pages/like/like';
import { SalePage } from '../pages/sale/sale';
import { Good_info_Page } from '../pages/good_info_/good_info_';
import { Page23Page } from '../pages/page23/page23';
import { Page24Page } from '../pages/page24/page24';
import { Page25Page } from '../pages/page25/page25';
import { Page14Page } from '../pages/page14/page14';
import { Page26Page } from '../pages/page26/page26';
import { SellPage } from '../pages/sell/sell';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    MypagePage,
    TabsControllerPage,
    HomePage,
    Home_clothesPage,
    Account_managePage,
    Account_modifyPage,
    Password_modifyPage,
    Bug_requestPage,
    Blacklist_reportPage,
    LikePage,
    SalePage,
    Good_info_Page,
    Page23Page,
    Page24Page,
    Page25Page,
    Page14Page,
    Page26Page,
    SellPage,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MypagePage,
    TabsControllerPage,
    HomePage,
    Home_clothesPage,
    Account_managePage,
    Account_modifyPage,
    Password_modifyPage,
    Bug_requestPage,
    Blacklist_reportPage,
    LikePage,
    SalePage,
    Good_info_Page,
    Page23Page,
    Page24Page,
    Page25Page,
    Page14Page,
    Page26Page,
    SellPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { InterventionPage } from '../pages/intervention/intervention';
import { EvaluationPage } from '../pages/evaluation/evaluation';
import { SignaturePage } from '../pages/signature/signature';
import { SuccessPage } from '../pages/success/success';


import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToSignup(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SignupPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToAbout(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AboutPage);
  }goToIntervention(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InterventionPage);
  }goToEvaluation(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EvaluationPage);
  }goToSignature(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SignaturePage);
  }goToSuccess(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SuccessPage);
  }
}

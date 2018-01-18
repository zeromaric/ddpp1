import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { AboutPage } from '../about/about';
import { InterventionPage } from '../intervention/intervention';
import { EvaluationPage } from '../evaluation/evaluation';
import { SignaturePage } from '../signature/signature';
import { SuccessPage } from '../success/success';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }goToAbout(params){
    if (!params) params = {};
    this.navCtrl.push(AboutPage);
  }goToIntervention(params){
    if (!params) params = {};
    this.navCtrl.push(InterventionPage);
  }goToEvaluation(params){
    if (!params) params = {};
    this.navCtrl.push(EvaluationPage);
  }goToSignature(params){
    if (!params) params = {};
    this.navCtrl.push(SignaturePage);
  }goToSuccess(params){
    if (!params) params = {};
    this.navCtrl.push(SuccessPage);
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SuccessPage } from '../success/success';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
import { InterventionPage } from '../intervention/intervention';
import { EvaluationPage } from '../evaluation/evaluation';
import { SignaturePage } from '../signature/signature';

@Component({
  selector: 'page-signature',
  templateUrl: 'signature.html'
})
export class SignaturePage {

  constructor(public navCtrl: NavController) {
  }
  goToSuccess(params){
    if (!params) params = {};
    this.navCtrl.push(SuccessPage);
  }goToAbout(params){
    if (!params) params = {};
    this.navCtrl.push(AboutPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToIntervention(params){
    if (!params) params = {};
    this.navCtrl.push(InterventionPage);
  }goToEvaluation(params){
    if (!params) params = {};
    this.navCtrl.push(EvaluationPage);
  }goToSignature(params){
    if (!params) params = {};
    this.navCtrl.push(SignaturePage);
  }
}

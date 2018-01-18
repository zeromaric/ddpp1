import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { InterventionPage } from '../intervention/intervention';
import { EvaluationPage } from '../evaluation/evaluation';
import { SignaturePage } from '../signature/signature';
import { SuccessPage } from '../success/success';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
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
  }goToAbout(params){
    if (!params) params = {};
    this.navCtrl.push(AboutPage);
  }
}

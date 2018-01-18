import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignaturePage } from '../signature/signature';
import { SuccessPage } from '../success/success';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
import { InterventionPage } from '../intervention/intervention';
import { EvaluationPage } from '../evaluation/evaluation';

@Component({
  selector: 'page-evaluation',
  templateUrl: 'evaluation.html'
})
export class EvaluationPage {

  constructor(public navCtrl: NavController) {
  }
  goToSignature(params){
    if (!params) params = {};
    this.navCtrl.push(SignaturePage);
  }goToSuccess(params){
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
  }
}

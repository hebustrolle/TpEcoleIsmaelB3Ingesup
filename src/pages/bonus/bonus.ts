import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

/**
 * Generated class for the BonusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bonus',
  templateUrl: 'bonus.html',
})
export class BonusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private vibration: Vibration) {
  }


  vibrationfunc(){
this.vibration.vibrate(1000);
  }

}

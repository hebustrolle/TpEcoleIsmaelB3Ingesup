import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { TextToSpeech } from '@ionic-native/text-to-speech';

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


  name: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private vibration: Vibration, private tts: TextToSpeech) {
  }


  vibrationfunc(){
this.vibration.vibrate(1000);
  }

  Textparler(){
      this.tts.speak({text: this.name, locale: 'fr-FR', rate: 1.5})
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }


}

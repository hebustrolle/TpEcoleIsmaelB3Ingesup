import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Toast } from '@ionic-native/toast';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private vibration: Vibration, private tts: TextToSpeech, private toast: Toast) {
  }


  vibrationfunc(){
this.vibration.vibrate(1000);
  }

  Textparler(){
      this.tts.speak({text: this.name, locale: 'fr-FR', rate: 1.5})
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  ToastHaut(){
    this.toast.show(`Je suis le toast du haut`, '5000', 'top').subscribe(
  toast => {
    console.log(toast);
  }
);

  }

  ToastBas(){
    this.toast.show(`Je suis le toast du bas`, '5000', 'bottom').subscribe(
  toast => {
    console.log(toast);
  }
);

  }



}

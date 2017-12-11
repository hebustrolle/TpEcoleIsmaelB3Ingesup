import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BonusPage } from './bonus';
import { Vibration } from '@ionic-native/vibration';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Toast } from '@ionic-native/toast';
@NgModule({
  declarations: [
    BonusPage,
  ],
  imports: [
    IonicPageModule.forChild(BonusPage),
  ],
  providers: [
    Vibration,
    TextToSpeech,
    Toast
  ]
})
export class BonusPageModule {}

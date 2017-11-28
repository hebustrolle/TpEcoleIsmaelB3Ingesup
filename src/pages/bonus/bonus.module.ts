import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BonusPage } from './bonus';
import { Vibration } from '@ionic-native/vibration';
import { TextToSpeech } from '@ionic-native/text-to-speech';
@NgModule({
  declarations: [
    BonusPage,
  ],
  imports: [
    IonicPageModule.forChild(BonusPage),
  ],
  providers: [
    Vibration,
    TextToSpeech
  ]
})
export class BonusPageModule {}

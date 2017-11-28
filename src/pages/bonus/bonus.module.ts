import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BonusPage } from './bonus';
import { Vibration } from '@ionic-native/vibration';
@NgModule({
  declarations: [
    BonusPage,
  ],
  imports: [
    IonicPageModule.forChild(BonusPage),
  ],
  providers: [
    Vibration
  ]
})
export class BonusPageModule {}

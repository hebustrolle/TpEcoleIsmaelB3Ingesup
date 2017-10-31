import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  app: AppModel;
//app: any={nom: String, version: Number};
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  //  this.app.nom="Titre01";
    //this.app.version=0.1;
    this.app = new AppModel("Titre001", 0.1);
  }


  clickbutton(){
    console.log('click');
  }


  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Bonjour',
      message: "Ceci est une modale avec un input",
      inputs: [
        {
          name: 'Input',
          placeholder: 'Inputplaceholder'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}


class AppModel{

  constructor( public nom: String, public version: Number){

  }


}

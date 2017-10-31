import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  app: AppModel;
  base64Image: String;

//app: any={nom: String, version: Number};
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private camera: Camera) {
  //  this.app.nom="Titre01";
    //this.app.version=0.1;
    this.app = new AppModel("Titre001", 0.1);
  }



  camerapicture(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
      this.base64Image = 'data:image/jpeg;base64,' + imageData;

    }, (err) => {


    });


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

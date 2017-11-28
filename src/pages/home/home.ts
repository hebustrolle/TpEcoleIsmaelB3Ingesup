import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { LocalNotifications } from '@ionic-native/local-notifications';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  app: AppModel;
  base64Image: string;
  base64Image2: string;

//app: any={nom: String, version: Number};
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private camera: Camera, private base64ToGallery: Base64ToGallery, private localNotifications: LocalNotifications) {
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
      this.base64Image2 = imageData;
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.base64ToGallery.base64ToGallery(this.base64Image2, { prefix: '_img' }).then(

        res => this.notif('Image sauvegardée'),
        err => this.notif('Image non sauvegardée...')

           );
    }, (err) => {


    });


  }

  public notif(data: string)
   {
       this.localNotifications.schedule({
           title: "Ionic App",
           text: data,
           at: new Date(new Date().getTime() + 0),
           icon: 'http://nodeimpact.com/images/favicons/apple-icon-57x57.png', //uniquement pour android
           badge: 1,
           led: '888888' //led notifications pour android uniquement, couleur rouge
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

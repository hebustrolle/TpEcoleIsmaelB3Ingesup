import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  app: AppModel;
//app: any={nom: String, version: Number};
  constructor(public navCtrl: NavController) {
  //  this.app.nom="Titre01";
    //this.app.version=0.1;
    this.app = new AppModel("Titre001", 0.1);
  }


  clickbutton(){
    console.log('click');
  }

}


class AppModel{

  constructor( public nom: String, public version: Number){

  }


}

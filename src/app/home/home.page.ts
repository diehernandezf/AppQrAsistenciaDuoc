import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  //Crear funciones
  goLoginAlumno(){
    this.navCtrl.navigateForward('/alumno-page')
  }

  goLoginDocente(){
    this.navCtrl.navigateForward('/docente-page')
  }

}

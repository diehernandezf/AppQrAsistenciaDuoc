import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  goLoginDocente() {
    // Redirige a la página de inicio de sesión de docentes
    this.navCtrl.navigateForward('/docente-page');
  }

  goLoginAlumno() {
    // Redirige a la página de inicio de sesión de alumnos
    this.navCtrl.navigateForward('/alumno-page');
  }

  goRegistroDocente() {
    // Redirige a la página de registro de docentes
    this.navCtrl.navigateForward('/registro-docente-page');
  }

  goRegistroAlumno() {
    // Redirige a la página de registro de alumnos
    this.navCtrl.navigateForward('/registro-alumno-page');
  }
}

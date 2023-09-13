import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-leer-qr-alumno', // Cambio de nombre aquí
  templateUrl: './leer-qr-alumno.page.html',
  styleUrls: ['./leer-qr-alumno.page.scss'],
})
export class LeerQrAlumnoPage { // Cambio de nombre de la clase
  userValue: string = '';

  constructor(
    private route: ActivatedRoute,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    const userValueFromParam = this.route.snapshot.paramMap.get('userValue');
    if (userValueFromParam !== null) {
      this.userValue = userValueFromParam;
    } else {
      this.userValue = ' '; // Asignar un valor en blanco
    }
  }

  async goGenerarQr() {
    // Aquí puedes realizar la lógica para generar el QR con éxito

    // Muestra una alerta con un mensaje de éxito
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'El QR se ha generado con éxito.',
      buttons: ['OK']
    });

    await alert.present();
  }
}

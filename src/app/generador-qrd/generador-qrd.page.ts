import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Importa el AlertController

@Component({
  selector: 'app-generador-qrd',
  templateUrl: './generador-qrd.page.html',
  styleUrls: ['./generador-qrd.page.scss'],
})
export class GeneradorQrdPage {
  // Definición de variables
  userValue: string = '';

  constructor(
    private route: ActivatedRoute,
    private alertController: AlertController // Inyecta el AlertController
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

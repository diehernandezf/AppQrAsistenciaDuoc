import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alumno-page',
  templateUrl: './alumno-page.page.html',
  styleUrls: ['./alumno-page.page.scss'],
})
export class AlumnoPagePage {
  username: string = '';
  password: string = '';
  camposValidos: boolean = false;

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  async validarCampos() {
    // Verificar si los campos cumplen con los requisitos de longitud
    this.camposValidos = (
      this.username.length >= 4 && this.username.length <= 12 &&
      this.password.length >= 6 && this.password.length <= 15
    );
  }

  async ingresar() {
    await this.validarCampos();

    if (!this.camposValidos) {
      const invalidFieldsAlert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, complete los campos correctamente.',
        buttons: ['OK'],
      });

      await invalidFieldsAlert.present();
    } else {
      // Los campos cumplen con los requisitos, redirigir al usuario a la página seleccionada
      this.router.navigate(['/inicio-page']);
    }
  }

  limpiarCampos() {
    // Este método restablece los campos a su estado inicial (vacío)
    this.username = '';
    this.password = '';
    this.camposValidos = false;
  }

  // Nueva función para redirigir a la página de recuperación de contraseña
  recuperarContrasena() {
    // Aquí puedes realizar cualquier lógica adicional necesaria antes de la redirección

    // Luego, redirigir al usuario a la página "RecuperarPassword_page"
    this.router.navigate(['/recuperar-password-page']);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}

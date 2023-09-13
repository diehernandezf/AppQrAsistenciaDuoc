import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';



@Component({
  selector: 'app-alumno-page',
  templateUrl: './alumno-page.page.html',
  styleUrls: ['./alumno-page.page.scss'],
})
export class AlumnoPagePage {
  nombre = 'nombre';
  apellido = 'apellido';
  isCleaning = false;

  formulario = this.fb.group({
    nombre: ['',[Validators.required]],
    contrasenia: ['', [Validators.required]],
  });

  constructor(
    private router: Router,
    private alertController: AlertController,
    private navCtrl: NavController,
    private fb: FormBuilder
  ) {}


  // Nueva función para redirigir a la página de recuperación de contraseña
  recuperarContrasena() {
    // Aquí puedes realizar cualquier lógica adicional necesaria antes de la redirección

    // Luego, redirigir al usuario a la página "RecuperarPassword_page"
    this.router.navigate(['/recuperar-password-page']);
  }

  goBack() {
    this.router.navigate(['/']);
  }

  goGeneradorQr() {
    const userValue = this.formulario.get('nombre')?.value;
    this.navCtrl.navigateRoot(`/leer-qr-alumno/${userValue}`);
  }
  
  

  limpiarFormulario(){
    this.isCleaning = true;
    setTimeout(() => {
      this.formulario.reset();
      this.isCleaning = false;
    }, 1000);
  }
}

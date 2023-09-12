import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnoPagePage } from './alumno-page.page'; // Asegúrate de que la ruta sea correcta

describe('AlumnoPagePage', () => {
  let component: AlumnoPagePage;
  let fixture: ComponentFixture<AlumnoPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlumnoPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

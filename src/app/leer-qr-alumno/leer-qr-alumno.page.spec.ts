import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeerQrAlumnoPage } from './leer-qr-alumno.page';

describe('LeerQrAlumnoPage', () => {
  let component: LeerQrAlumnoPage;
  let fixture: ComponentFixture<LeerQrAlumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LeerQrAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDatosComponent } from './mostrar-datos.component';

describe('MostrarDatosComponent', () => {
  let component: MostrarDatosComponent;
  let fixture: ComponentFixture<MostrarDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosGeneralesRegistroControlComponent } from './datos-generales-registro-control.component';

describe('DatosGeneralesRegistroControlComponent', () => {
  let component: DatosGeneralesRegistroControlComponent;
  let fixture: ComponentFixture<DatosGeneralesRegistroControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosGeneralesRegistroControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosGeneralesRegistroControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

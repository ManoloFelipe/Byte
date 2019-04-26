import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopiarParametrosProductoComponent } from './copiar-parametros-producto.component';

describe('CopiarParametrosProductoComponent', () => {
  let component: CopiarParametrosProductoComponent;
  let fixture: ComponentFixture<CopiarParametrosProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopiarParametrosProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopiarParametrosProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

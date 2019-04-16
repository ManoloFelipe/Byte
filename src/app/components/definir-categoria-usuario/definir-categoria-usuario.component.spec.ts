import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinirCategoriaUsuarioComponent } from './definir-categoria-usuario.component';

describe('DefinirCategoriaUsuarioComponent', () => {
  let component: DefinirCategoriaUsuarioComponent;
  let fixture: ComponentFixture<DefinirCategoriaUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinirCategoriaUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinirCategoriaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

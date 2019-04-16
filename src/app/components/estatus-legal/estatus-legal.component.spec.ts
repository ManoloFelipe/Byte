import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatusLegalComponent } from './estatus-legal.component';

describe('EstatusLegalComponent', () => {
  let component: EstatusLegalComponent;
  let fixture: ComponentFixture<EstatusLegalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstatusLegalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatusLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

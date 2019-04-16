import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontosPlazoComponent } from './montos-plazo.component';

describe('MontosPlazoComponent', () => {
  let component: MontosPlazoComponent;
  let fixture: ComponentFixture<MontosPlazoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontosPlazoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontosPlazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularObservablesComponent } from './angular-observables.component';

describe('AngularObservablesComponent', () => {
  let component: AngularObservablesComponent;
  let fixture: ComponentFixture<AngularObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularObservablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

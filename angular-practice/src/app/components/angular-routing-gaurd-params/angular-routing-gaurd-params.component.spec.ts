import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRoutingGaurdParamsComponent } from './angular-routing-gaurd-params.component';

describe('AngularRoutingGaurdParamsComponent', () => {
  let component: AngularRoutingGaurdParamsComponent;
  let fixture: ComponentFixture<AngularRoutingGaurdParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularRoutingGaurdParamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularRoutingGaurdParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

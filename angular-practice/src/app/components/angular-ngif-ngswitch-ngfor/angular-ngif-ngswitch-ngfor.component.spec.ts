import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularNgifNgswitchNgforComponent } from './angular-ngif-ngswitch-ngfor.component';

describe('AngularNgifNgswitchNgforComponent', () => {
  let component: AngularNgifNgswitchNgforComponent;
  let fixture: ComponentFixture<AngularNgifNgswitchNgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularNgifNgswitchNgforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularNgifNgswitchNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

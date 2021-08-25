import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularServiceWorkersComponent } from './angular-service-workers.component';

describe('AngularServiceWorkersComponent', () => {
  let component: AngularServiceWorkersComponent;
  let fixture: ComponentFixture<AngularServiceWorkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularServiceWorkersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularServiceWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

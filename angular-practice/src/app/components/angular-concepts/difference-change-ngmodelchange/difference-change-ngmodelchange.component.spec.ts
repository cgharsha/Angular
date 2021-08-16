import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferenceChangeNgmodelchangeComponent } from './difference-change-ngmodelchange.component';

describe('DifferenceChangeNgmodelchangeComponent', () => {
  let component: DifferenceChangeNgmodelchangeComponent;
  let fixture: ComponentFixture<DifferenceChangeNgmodelchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifferenceChangeNgmodelchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferenceChangeNgmodelchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

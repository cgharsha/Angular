import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitTwoWayBindingComponent } from './split-two-way-binding.component';

describe('SplitTwoWayBindingComponent', () => {
  let component: SplitTwoWayBindingComponent;
  let fixture: ComponentFixture<SplitTwoWayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitTwoWayBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitTwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

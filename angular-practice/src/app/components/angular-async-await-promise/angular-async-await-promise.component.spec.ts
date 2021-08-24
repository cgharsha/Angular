import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAsyncAwaitPromiseComponent } from './angular-async-await-promise.component';

describe('AngularAsyncAwaitPromiseComponent', () => {
  let component: AngularAsyncAwaitPromiseComponent;
  let fixture: ComponentFixture<AngularAsyncAwaitPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularAsyncAwaitPromiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularAsyncAwaitPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

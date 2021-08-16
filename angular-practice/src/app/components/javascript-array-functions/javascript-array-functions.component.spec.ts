import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptArrayFunctionsComponent } from './javascript-array-functions.component';

describe('JavascriptArrayFunctionsComponent', () => {
  let component: JavascriptArrayFunctionsComponent;
  let fixture: ComponentFixture<JavascriptArrayFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptArrayFunctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptArrayFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptMethodsComponent } from './javascript-methods.component';

describe('JavascriptMethodsComponent', () => {
  let component: JavascriptMethodsComponent;
  let fixture: ComponentFixture<JavascriptMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptMethodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

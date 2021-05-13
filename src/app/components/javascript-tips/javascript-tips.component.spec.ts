import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptTipsComponent } from './javascript-tips.component';

describe('JavascriptTipsComponent', () => {
  let component: JavascriptTipsComponent;
  let fixture: ComponentFixture<JavascriptTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptTipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptShorthandComponent } from './javascript-shorthand.component';

describe('JavascriptShorthandComponent', () => {
  let component: JavascriptShorthandComponent;
  let fixture: ComponentFixture<JavascriptShorthandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptShorthandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptShorthandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

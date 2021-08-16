import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptOneLinersComponent } from './javascript-one-liners.component';

describe('JavascriptOneLinersComponent', () => {
  let component: JavascriptOneLinersComponent;
  let fixture: ComponentFixture<JavascriptOneLinersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptOneLinersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptOneLinersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

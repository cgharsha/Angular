import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptCodeSnippetsComponent } from './javascript-code-snippets.component';

describe('JavascriptCodeSnippetsComponent', () => {
  let component: JavascriptCodeSnippetsComponent;
  let fixture: ComponentFixture<JavascriptCodeSnippetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptCodeSnippetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptCodeSnippetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

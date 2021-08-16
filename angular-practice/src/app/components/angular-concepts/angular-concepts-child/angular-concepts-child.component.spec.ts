import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularConceptsChildComponent } from './angular-concepts-child.component';

describe('AngularConceptsChildComponent', () => {
  let component: AngularConceptsChildComponent;
  let fixture: ComponentFixture<AngularConceptsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularConceptsChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularConceptsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

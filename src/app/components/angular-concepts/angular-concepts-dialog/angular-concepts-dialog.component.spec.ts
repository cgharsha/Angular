import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularConceptsDialogComponent } from './angular-concepts-dialog.component';

describe('AngularConceptsDialogComponent', () => {
  let component: AngularConceptsDialogComponent;
  let fixture: ComponentFixture<AngularConceptsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularConceptsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularConceptsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

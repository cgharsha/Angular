import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartnshortJscodeComponent } from './smartnshort-jscode.component';

describe('SmartnshortJscodeComponent', () => {
  let component: SmartnshortJscodeComponent;
  let fixture: ComponentFixture<SmartnshortJscodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartnshortJscodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartnshortJscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

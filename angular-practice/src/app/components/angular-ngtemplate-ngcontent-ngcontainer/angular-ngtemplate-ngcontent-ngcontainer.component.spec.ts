import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularNgtemplateNgcontentNgcontainerComponent } from './angular-ngtemplate-ngcontent-ngcontainer.component';

describe('AngularNgtemplateNgcontentNgcontainerComponent', () => {
  let component: AngularNgtemplateNgcontentNgcontainerComponent;
  let fixture: ComponentFixture<AngularNgtemplateNgcontentNgcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularNgtemplateNgcontentNgcontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularNgtemplateNgcontentNgcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMergemapConcatmapSwitchmapForkjoinComponent } from './angular-mergemap-concatmap-switchmap-forkjoin.component';

describe('AngularMergemapConcatmapSwitchmapForkjoinComponent', () => {
  let component: AngularMergemapConcatmapSwitchmapForkjoinComponent;
  let fixture: ComponentFixture<AngularMergemapConcatmapSwitchmapForkjoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMergemapConcatmapSwitchmapForkjoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMergemapConcatmapSwitchmapForkjoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

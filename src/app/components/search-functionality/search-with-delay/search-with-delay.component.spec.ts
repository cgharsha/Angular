import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWithDelayComponent } from './search-with-delay.component';

describe('SearchWithDelayComponent', () => {
  let component: SearchWithDelayComponent;
  let fixture: ComponentFixture<SearchWithDelayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchWithDelayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWithDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

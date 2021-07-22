import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWithOptionComponent } from './search-with-option.component';

describe('SearchWithOptionComponent', () => {
  let component: SearchWithOptionComponent;
  let fixture: ComponentFixture<SearchWithOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchWithOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWithOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

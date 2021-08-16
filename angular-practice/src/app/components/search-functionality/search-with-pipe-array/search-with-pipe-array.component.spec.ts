import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWithPipeArrayComponent } from './search-with-pipe-array.component';

describe('SearchWithPipeArrayComponent', () => {
  let component: SearchWithPipeArrayComponent;
  let fixture: ComponentFixture<SearchWithPipeArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchWithPipeArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWithPipeArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

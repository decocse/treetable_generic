import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcompnentComponent } from './searchcompnent.component';

describe('SearchcompnentComponent', () => {
  let component: SearchcompnentComponent;
  let fixture: ComponentFixture<SearchcompnentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchcompnentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchcompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

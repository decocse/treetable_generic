import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesizeComponent } from './filesize.component';

describe('FilesizeComponent', () => {
  let component: FilesizeComponent;
  let fixture: ComponentFixture<FilesizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilesizeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilesizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

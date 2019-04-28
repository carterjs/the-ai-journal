import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceFormDialogComponent } from './source-form-dialog.component';

describe('SourceFormDialogComponent', () => {
  let component: SourceFormDialogComponent;
  let fixture: ComponentFixture<SourceFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

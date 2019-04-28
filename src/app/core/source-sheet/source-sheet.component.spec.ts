import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceSheetComponent } from './source-sheet.component';

describe('SourceSheetComponent', () => {
  let component: SourceSheetComponent;
  let fixture: ComponentFixture<SourceSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

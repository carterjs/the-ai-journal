import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';

@Component({
  selector: 'app-source-sheet',
  templateUrl: './source-sheet.component.html',
  styleUrls: ['./source-sheet.component.scss']
})
export class SourceSheetComponent implements OnInit {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) private data) { }

  ngOnInit() {
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Source } from 'src/app/interfaces/source';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-source-form-dialog',
  templateUrl: './source-form-dialog.component.html',
  styleUrls: ['./source-form-dialog.component.scss']
})
export class SourceFormDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<SourceFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Source, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      tag: [this.data.tag, [Validators.required, Validators.pattern('^[^0-9][a-zA-Z0-9_]+')]],
      description: [this.data.description, [Validators.required]],
      url: [this.data.url, [Validators.required]]
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.form.value);
  }

}

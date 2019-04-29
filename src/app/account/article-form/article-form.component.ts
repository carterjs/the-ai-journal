import { Component, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/article';
import { MatDialog } from '@angular/material';
import { SourceFormDialogComponent } from '../source-form-dialog/source-form-dialog.component';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent {

  @Input('state')
  state: Article

  @Input('submit')
  submit = () => {};

  constructor(private dialog: MatDialog) { }

  addSource() {
    const dialogRef = this.dialog.open(SourceFormDialogComponent, {
      width: "250px",
      data: {
        tag: "",
        description: "",
        url: ""
      }
    });

    dialogRef.afterClosed().subscribe(newSource => {
      if(!!newSource) {
        if(!this.state.sources) {
          this.state.sources = [];
        }
        this.state.sources.push(newSource);
      }
    });
  }

  editSource(index) {
    const dialogRef = this.dialog.open(SourceFormDialogComponent, {
      width: "250px",
      data: this.state.sources[index]
    });

    dialogRef.afterClosed().subscribe(newData => {
      if(!!newData) {
        this.state.sources[index] = newData;
      }
    });
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from 'src/app/interfaces/article';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.scss']
})
export class ArticleEditorComponent {

  id$: Observable<string>;

  old: Article;
  next: Article;

  constructor(private articleService: ArticleService, route: ActivatedRoute, private snackBar: MatSnackBar) {
    this.id$ = route.paramMap.pipe(map(params => params.get('id')));
  }

  submit(id) {
    return (article) => {
      this.articleService.update(id, article).then(() => {
        this.snackBar.open("Changes saved", "Dismiss", {
          duration: 5000
        });
      });
    }
  }

}

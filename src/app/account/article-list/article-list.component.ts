import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { AuthService } from 'src/app/services/auth.service';
import { load } from 'src/app/animations/load';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
  animations: [
    load
  ]
})
export class ArticleListComponent {

  query: string = "";

  constructor(private articleService: ArticleService, private authService: AuthService, private snackBar: MatSnackBar) { }

  delete(id) {
    this.articleService.delete(id).then(() => {
      this.snackBar.open("Article deleted.", "Dismiss", {
        duration: 5000
      });
    });
  }

}

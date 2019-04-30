import { Component } from '@angular/core';
import { Article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/article.service';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { load } from 'src/app/animations/load';

@Component({
  selector: 'app-article-creator',
  templateUrl: './article-creator.component.html',
  styleUrls: ['./article-creator.component.scss'],
  animations: [
    load
  ]
})
export class ArticleCreatorComponent {

  newArticle: Article;

  constructor(private articleService: ArticleService, private authService: AuthService, private snackBar: MatSnackBar, private router: Router) {
    this.newArticle = {
      title: "New Article",
      description: "",
      image: "",
      content: ""
    }
  }

  submit(uid) {
    return (article) => {
      this.articleService.create(article, uid).then((doc) => {
        this.snackBar.open("Article created", "Dismiss", {
          duration: 5000
        });
        this.router.navigate(['/' + doc.id]);
      });
    }
  }
  
}

import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { AuthService } from 'src/app/services/auth.service';
import { load } from 'src/app/animations/load';

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

  constructor(private articleService: ArticleService, private authService: AuthService) { }

  filter(articles, query) {
    return articles.filter(article => {
      if('title' in article) {
        return article.title.toLowerCase().includes(query.toLowerCase())
      }
      return true;
    });
  }

}

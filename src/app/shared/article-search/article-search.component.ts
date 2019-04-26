import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.scss']
})
export class ArticleSearchComponent {

  @Input('articles')
  articles = [];

  @Input('path')
  path = "/";

  query: string = "";
  target: string = "title";

  constructor() { }

  filter(query, target) {
    return this.articles.filter(article => {
      if(target in article) {
        return article[target].toLowerCase().includes(query.toLowerCase());
      }
      return true;
    });
  }

}

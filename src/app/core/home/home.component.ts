import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { load } from 'src/app/animations/load';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    load
  ]
})
export class HomeComponent {

  query: string = "";
  target: string = "title";
  filtered: any[] = [];

  constructor(private articleService: ArticleService) { }

  filter() {
    this.filtered = this.articleService.articles.filter(article => {
      switch(this.target) {
        case "title":
          return article.title.toLowerCase().includes(this.query.toLowerCase());
        case "description":
          return article.content.toLowerCase().includes(this.query.toLowerCase());
      }
      return true;
    });
    return this.filtered;
  }

  loaded() {
    if(!!this.articleService.articles && this.articleService.articles.length > 0 && !!this.articleService.articles[0].authorData) {
      return this.articleService.articles;
    }
    return false;
  }

}

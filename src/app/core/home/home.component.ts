import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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
          return article.title.toLowerCase().includes(this.query);
        case "description":
          return article.content.toLowerCase().includes(this.query);
      }
      return true;
    });
    return this.filtered;
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent {

  @Input('articles')
  articles: {}[];

  @Input('divided')
  divided = true;

  @Input('firstDivider')
  firstDivider = true;

  @Input('path')
  path = "/";

  constructor() { }

}

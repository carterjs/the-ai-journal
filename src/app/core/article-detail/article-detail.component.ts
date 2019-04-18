import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent {

  article$: Observable<any>;

  constructor(private articleService: ArticleService, route: ActivatedRoute) {
    route.paramMap.subscribe(params => {
      this.article$ = articleService.get(params.get('id'));
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.scss']
})
export class ArticleEditorComponent {

  id$: Observable<string>;

  old: Article;
  next: Article;

  constructor(private articleService: ArticleService, route: ActivatedRoute) {
    this.id$ = route.paramMap.pipe(map(params => params.get('id')));
  }

  fetch(id) {
    const article = this.articleService.get(id);
    if(!!article) {
      if(this.noChanges()) {
        if(!this.old) {
          this.old = this.apply({} as Article, article);
        }
        if(!this.next) {
          this.next = this.apply({} as Article, article);
        }
        this.apply(this.old, article);
        this.apply(this.next, article);
      }
      this.apply(this.old, article);
      return true;
    }
    return false;
  }

  reset() {
    this.next = Object.assign({}, this.old);
  }

  submit(id) {
    this.articleService.update(id, this.next).then(() => {
      this.old = this.next;
    });
  }

  apply(article1: Article, article2: Article) {
    article1.title = article2.title;
    article1.image = article2.image;
    article1.description = article2.description;
    article1.content = article2.content;
    article1.sources = article2.sources || [];
    return article1;
  }

  noChanges() {
    if(!this.old && !this.next) {
      return true;
    }
    return this.old.title == this.next.title
        && this.old.image == this.next.image
        && this.old.description == this.next.description
        && this.old.content == this.next.content
        && this.old.sources == this.next.sources;
  }

}

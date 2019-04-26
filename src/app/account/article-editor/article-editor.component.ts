import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Article {
  title: string;
  image: string;
  description: string;
  content: string
};

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
        this.old = this.next = this.strip(article);
      }
      this.old = this.strip(article);
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

  strip(article: Article) {
    return {
      title: article.title,
      image: article.image,
      description: article.description,
      content: article.content
    };
  }

  noChanges() {
    if(!this.old && !this.next) {
      return true;
    }
    return this.old.title == this.next.title
        && this.old.image == this.next.image
        && this.old.description == this.next.description
        && this.old.content == this.next.content;
  }

}
